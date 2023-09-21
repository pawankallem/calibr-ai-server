require("dotenv").config();
const mongoose = require("mongoose");

const db_url = process.env.DB_URL;

module.exports = () => {
  mongoose.connect(db_url);
};
