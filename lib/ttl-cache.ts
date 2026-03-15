type CacheEntry<T> = {
  expiresAt: number;
  value: T;
};

const store = new Map<string, CacheEntry<unknown>>();

export async function withTtlCache<T>(key: string, ttlMs: number, producer: () => Promise<T>): Promise<T> {
  const now = Date.now();
  const hit = store.get(key) as CacheEntry<T> | undefined;
  if (hit && hit.expiresAt > now) {
    return hit.value;
  }

  const value = await producer();
  store.set(key, { value, expiresAt: now + ttlMs });
  return value;
}

export function invalidateTtlCache(prefix?: string) {
  if (!prefix) {
    store.clear();
    return;
  }
  for (const key of store.keys()) {
    if (key.startsWith(prefix)) store.delete(key);
  }
}

export function invalidateBusinessReadCaches() {
  invalidateTtlCache("admin:dashboard:");
  invalidateTtlCache("admin:attendance:");
  invalidateTtlCache("admin:payroll:");
  invalidateTtlCache("admin:overtime:");
}
