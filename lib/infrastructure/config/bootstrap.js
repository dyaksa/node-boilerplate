"use strict";

require("dotenv").config();

const constants = require("./constants");
const environment = require("./environment");
const db = require("../orm/sequelize/sequelize");

module.exports = {
  init: async function () {
    if (
      environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRES ||
      environment.database.dialect === constants.SUPPORTED_DATABASE.SQLITE
    ) {
      try {
        await db.sequelize.sync();
        console.log("Database connection established successfully");
      } catch (err) {
        console.error("Error while connecting to database: ", err);
      }
    }
  },
};
