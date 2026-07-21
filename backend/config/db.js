const dotenv = require("dotenv");
const dns = require("node:dns");

dotenv.config({
  path: "./.env",
});

dns.setServers(["1.1.1.1", "1.0.0.1"]);

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB Connected Successfully");
    console.log("Host:", conn.connection.host);
    console.log("Database:", conn.connection.name);
  } catch (error) {
    console.error("MongoDB Connection Failed");
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
