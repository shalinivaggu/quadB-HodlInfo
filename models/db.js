const { Pool } = require('pg');

const pool = new Pool({
  user: 'hodlinfo_db_8nnn_user',
  host: 'dpg-cq3pk1ks1f4s73fjrdp0-a',
  database: 'hodlinfo_db_8nnn',
  password: 'utLzOMPgDEn26AdVwwH1t67QN6F6fVeY',
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
