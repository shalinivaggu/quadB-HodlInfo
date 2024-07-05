const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'hodlinfo_db',
  password: '123456',
  port: process.env.port | 5432, // Default PostgreSQL port
});

pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(-1);
  } else {
    console.log('Connected to the PostgreSQL database');
  }
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS tickers (
    id SERIAL PRIMARY KEY,
    name TEXT,
    last NUMERIC,
    buy NUMERIC,
    sell NUMERIC,
    volume NUMERIC,
    base_unit TEXT,
    quote_unit TEXT,
    open NUMERIC,
    difference NUMERIC,
    savings NUMERIC,
    at NUMERIC
  );
`;

pool.query(createTableQuery, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Table created successfully');
  }
});

module.exports = pool;