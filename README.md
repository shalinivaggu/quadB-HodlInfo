# quadB-HodlInfo
 a webpage similar to https://hodlinfo.com with real-time cryptocurrency data displayed using HTML, CSS, and a Node.js backend

creating this webpage hodlinfo.com by using HTML and CSS and backend using node js
Fetching top 10 results from API(https://api.wazirx.com/api/v2/tickers) in my Nodejs express server and storing all top 10 results in the database by using PostgreSQL.

following these structured steps:

### Step 1: Set Up Your Development Environment

1. **Install Node.js**: Ensure Node.js is installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).
2. **Set Up a New Node.js Project**:
    - Create a new directory for your project and navigate into it.
    - Run `npm init -y` to generate a `package.json` file, which manages project dependencies.

### Step 2: Build the Node.js Backend

1. **Install Express and Other Dependencies**:
    - Install Express.js by running `npm install express`.
    - Install a PostgreSQL client for Node.js, such as `pg`, using `npm install pg`.
    - Optionally, install `nodemon` for hot reloading during development (`npm install --save-dev nodemon`).
2. **Set Up Express Server**:
    - Create a file named `server.js`.
    - Import Express and initialize it to create a basic server that listens on a suitable port (e.g., 3000).
3. **Fetch Data from API**:
    - Use the `axios` package to make HTTP requests (`npm install axios`).
    - Write a function that fetches data from the WazirX API (`https://api.wazirx.com/api/v2/tickers`) and filters the top 10 results based on trading volume or other criteria.
4. **Store Data in PostgreSQL**:
    - Establish a connection to your PostgreSQL database using the `pg` library.
    - Create a table to store cryptocurrency data (e.g., name, last, buy, sell, volume, base_unit).
    - Insert the fetched data into the PostgreSQL database using SQL commands.
5. **Create an API Route**:
    - Define a route in Express that fetches the stored data from your PostgreSQL database and returns it as JSON.

### Step 3: Design the Frontend

1. **Basic HTML Structure**:
    - Create an `index.html` file that includes elements such as tables or lists to display the cryptocurrency data.
    - Ensure the structure closely matches the layout of [hodlinfo.com](http://hodlinfo.com/).
2. **Styling with CSS**:
    - Create a `styles.css` file to style your webpage.
    - Use CSS to mimic the styling of [hodlinfo.com](http://hodlinfo.com/) as closely as possible, focusing on layout, colors, and fonts.
3. **Fetch and Display Data**:
    - Use JavaScript to fetch data from your backend API.
    - Populate the HTML elements with this data dynamically.
