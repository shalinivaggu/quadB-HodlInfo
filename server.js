const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const db = require('./models/db');
const api = require('./routes/api');

app.get("/", async (request, response) => {
  try {
    const result = await api.getTickers('btc');
    response.json(result);
  } catch (error) {
    console.error('Error getting tickers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/tickers/', async (request, response) => {
  try {
    const result = await api.getTickers('btc');
    response.json(result);
  } catch (error) {
    console.error('Error getting tickers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/tickers/:base/' , async (request , response) => {
  const {base} = request.params;
  const value = base.toLowerCase()
  try {
    const result = await api.getTickers(value);
    response.json(result);
  } catch (error) {
    console.error('Error getting tickers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});