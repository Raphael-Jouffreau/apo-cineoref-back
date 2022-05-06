require('dotenv').config();

const { Pool } = require('pg');

const client = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    ssl: {
        rejectUnauthorized: false,
      },
});
client.connect();

module.exports = client;