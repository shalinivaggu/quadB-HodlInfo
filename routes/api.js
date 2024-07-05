const axios = require('axios');
const db = require('../models/db');

const fetchData = async () => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const entries = Object.entries(response.data).slice(0,10);
    for (let [key, value] of entries) {
      let data = value;
      const savings = parseInt(data.sell) - parseInt(data.buy);
      let difference = parseFloat(savings * 100 / data.buy).toFixed(2);
      const query = {
        text: `insert into tickers(name , last , buy , sell , volume , base_unit , quote_unit, open , at , difference , savings) values ($1, $2, $3, $4, $5, $6, $7, $8, $9,$10 , $11)`,
        values: [data.name, data.last, data.buy, data.sell, data.volume, data.base_unit,data.quote_unit,data.open, data.at, difference, savings]
      };
      await db.query(query);
    }
    console.log('Data inserted successfully!');
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

const getTickers = async (base) => {
  try {
    await fetchData();
    const query = `SELECT * 
    FROM tickers 
    WHERE base_unit = '${base}'
    ORDER BY at DESC
    LIMIT 10;
    `;
    const result = await db.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error getting tickers:', error);
    throw error;
  }
};

module.exports = { getTickers };