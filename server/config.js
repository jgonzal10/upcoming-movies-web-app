const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  ENPOINT: process.env.API_URL,
  MASTERKEY: process.env.API_KEY,
  PORT: process.env.PORT
};