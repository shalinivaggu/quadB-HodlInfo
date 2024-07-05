const selectBase = document.getElementById("selectBase")
const countdownText =  document.getElementById("countdown-text")
const avgvalue = document.getElementById("avgvalue")
const baseId = document.getElementById("baseId")
const spinner = document.getElementById("spinner")
const togglecheck = document.getElementById("togglecheck")
const theme = document.getElementById("theme")

let countdown = 60;
let interval = setInterval(() => {
  countdown--;
  countdownText.textContent = countdown;
  if (countdown === 0) {
    countdown = 60;
    countdownText.textContent = countdown;
  }
}, 1000);

let average = 0 ;
// Fetch ticker data
  fetch(`/tickers/`)
    .then(response => response.json())
    .then(data => {
      spinner.classList.add('d-none')
      const tickerData = data;
      const tickerTableBody = document.getElementById('dataTableBody');
      tickerData.forEach((ticker, index) => {
        const row = tickerTableBody.insertRow();
        row.classList.add("tablerow");
        row.insertCell().textContent = index + 1;
        row.insertCell().textContent = ticker.name;
        row.insertCell().textContent = ticker.last;
        row.insertCell().textContent = `$${ticker.buy} / $${ticker.sell}`;
        row.insertCell().textContent = `${ticker.difference}%`;
        row.insertCell().textContent = ticker.savings;
        average += parseInt(ticker.last);
      });
      if (tickerData.length > 0 && average > 0)
        avgvalue.textContent = `${parseInt(average / tickerData.length)}`;
      else 
        avgvalue.textContent = '0';
    })
    .catch(error => {
      console.error('Error fetching ticker data:', error);
    });

    selectBase.addEventListener("change" , function(event){
      const tickerTableBody = document.getElementById('dataTableBody');
      tickerTableBody.innerHTML = "";
      const base = event.target.value;
      baseId.textContent = base;
      spinner.classList.remove('d-none')
      fetch(`/tickers/${base}/`)
      .then(response => response.json())
      .then(data => {
        spinner.classList.add('d-none')
        let average = 0;
        const tickerData = data;
        console.log(tickerData);
        tickerData.forEach((ticker, index) => {
          const row = tickerTableBody.insertRow();
          row.classList.add("tablerow");
          row.insertCell().textContent = index + 1;
          row.insertCell().textContent = ticker.name;
          row.insertCell().textContent = ticker.last;
          row.insertCell().textContent = `$${ticker.buy} / $${ticker.sell}`;
          row.insertCell().textContent = `${parseFloat(ticker.volume).toFixed(2)}%`;
          row.insertCell().textContent = ticker.savings;
          average += parseInt(ticker.last);
        });
        avgvalue.textContent = `${parseInt(average / tickerData.length)}`;
        if (tickerData.length > 0 && average > 0)
          avgvalue.textContent = `${parseInt(average / tickerData.length)}`;
        else 
          avgvalue.textContent = '0';
      })
      .catch(error => {
        console.error('Error fetching ticker data:', error);
      });
  
    })

togglecheck.addEventListener("change" , function(event) {
  theme.classList.toggle("theme-dark");
})