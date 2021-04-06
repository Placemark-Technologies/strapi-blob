module.exports = ({ env }) => ({
  upload: {
    provider: 'azure-storage',
    providerOptions: {
      account: env('ACCOUNT_ID'),
      accountKey: env('ACCOUNT_KEY'),
      containerName: env('CONTAINER_NAME'),
      defaultPath: env('ASSETS_PATH'),
      maxConcurrent: 10,
    },
  },
});
