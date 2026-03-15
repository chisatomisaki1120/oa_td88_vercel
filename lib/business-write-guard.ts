import { fail } from "@/lib/api";
import { getBusinessWriteBlockReason, isBusinessWriteAllowed } from "@/lib/instance-mode";

export function ensureBusinessWriteAllowed() {
  if (!isBusinessWriteAllowed()) {
    return fail(getBusinessWriteBlockReason(), 409);
  }
  return null;
}
