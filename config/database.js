module.exports = ({ env }) => ({
  defaultConnection: 'remote',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
    remote: {
      connector: 'mongoose',
      settings: {
        database: env('DATABASE_NAME'),
        uri: `mongodb+srv://${env('DATABASE_USERNAME')}:${env('DATABASE_PASSWORD')}@${env('DATABASE_HOST')}/${env('DATABASE_NAME')}?retryWrites=true&w=majority`,
      },
      options: {
        ssl: true,
      },
    },
  },
});
