module.exports = {
  apps: [
    {
      name: 'oa-td88-web',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'oa-td88-sync-outbox',
      script: 'node',
      args: 'scripts/ops/sync-outbox-loop.mjs',
      env: {
        NODE_ENV: 'production',
        APP_INSTANCE: 'vps',
        APP_ROLE: 'primary',
        OUTBOX_SYNC_INTERVAL_MS: '15000',
      },
    },
  ],
};
