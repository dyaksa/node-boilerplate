const constants = require("./constants");

module.exports = (() => {
  const environment = {
    database: {
      dialect:
        process.env.DATABASE_DIALECT || constants.SUPPORTED_DATABASE.POSTGRES,
      host: process.env.DATABASE_HOST || "",
      port: process.env.DATABASE_PORT || "",
      name: process.env.DATABASE_NAME || "",
      username: process.env.DATABASE_USERNAME || "",
      password: process.env.DATABASE_PASSWORD || "",
    },
  };

  if (process.env.NODE_ENV === "test") {
    driver: constants.SUPPORTED_DATABASE.IN_MEMORY;
  }

  return environment;
})();
