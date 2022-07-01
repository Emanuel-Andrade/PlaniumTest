const env = require('dotenv');

env.config();

const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: process.env.DATABASEHOST,
    user: process.env.DATABASEUSER,
    password: process.env.DATABASEPASSWORD,
    database: process.env.DATABASE,
  },
});

module.exports = knex;
