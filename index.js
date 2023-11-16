"use strict";

const bootstrap = require("./lib/infrastructure/config/bootstrap");
const createServer = require("./lib/infrastructure/webserver/server");

const start = async () => {
  try {
    await bootstrap.init();

    const server = await createServer();
    await server.start();

    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.error("Error while starting up server: ", err);
    process.exit(1);
  }
};

start();
