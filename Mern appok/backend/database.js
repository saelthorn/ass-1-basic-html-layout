const mongoose = require('mongoose');
require('dotenv').config();

const connectDatabase = () => {
  mongoose.connect(process.env.DB_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(con => {
    console.log(`MongoDB Database connected with HOST ${con.connection.host}`);
  }).catch(err => {
    console.error(`Error connecting to MongoDB: ${err.message}`);
  });
};

module.exports = connectDatabase;
