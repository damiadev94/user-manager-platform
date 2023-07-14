const mongoose = require("mongoose");
const { connect, connection } = mongoose;

const url = process.env.URL_DATABASE;

const connectToDatabase = () => {
  try {
    connect(url);
  } catch (err) {
    console.log(err);
  }
};

const closeConnection = () => {
  try {
    connection.close();
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectToDatabase, closeConnection;
