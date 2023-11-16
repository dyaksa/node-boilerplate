const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const Blipp = require("blipp");
const HapiSwagger = require("hapi-swagger");
const Package = require("../../../package.json");

const createServer = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
  });

  await server.register([
    Inert,
    Vision,
    Blipp,
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: "API Documentation",
          version: Package.version,
        },
      },
    },
  ]);

  return server;
};

module.exports = createServer;
