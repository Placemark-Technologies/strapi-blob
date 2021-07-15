require("dotenv").config();
module.exports = ({ env }) => ({
  defaultConnection: "remote",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "sqlite",
        filename: env("DATABASE_FILENAME", ".tmp/data.db"),
      },
      options: {
        useNullAsDefault: true,
      },
    },
    remote: {
      connector: "mongoose",
      settings: {
        uri: `mongodb://${env("DATABASE_USERNAME")}:${env(
          "DATABASE_PASSWORD"
        )}@projectres-shard-00-00.ytiyf.mongodb.net:27017,projectres-shard-00-01.ytiyf.mongodb.net:27017,projectres-shard-00-02.ytiyf.mongodb.net:27017/${env(
          "DATABASE_NAME"
        )}?ssl=true&replicaSet=atlas-vik0ib-shard-0&authSource=admin&retryWrites=true&w=majority`,
      },
      options: {
        ssl: true,
      },
    },
  },
});
