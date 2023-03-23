# Cryptosphere 
One stop web application to get information regarding various cryptocurrencies. Currently supports Ethereum.

## Setting up the codebase
- Go to the 'frontend' folder and type ``` npm i ``` to install the dependencies
- cd to frontend\src\server and type ``` node index.js ``` to start the server
- cd to frontend and type ``` npm start ``` to start the React application

## Features
1. Overview section: 
- This contains the various statistic metrics.  
- Return of Investment (ROI) of Gold and SPX index with respect to Ethereum
- A time series price chart of the coin that gives the price of the coin v/s time. This gets automatically updated. 
- An About section that provides an overview of the cryptocurrency. The user is redirected to further resources if they wish to read more about it.
2. Charts section: This contains nine charts that helps in a better analysis of the cryptocurrency
- Historical Price Chart : Candlestick and Line chart. It provides the value of Open, High, Low and Close price of the coin. We have the data from 2016 - present.
- Intraday Price Chart : Candlestick and Line chart. 
- Historical Volume Weighted Average Price (VWAP) Chart
- Intraday Volume Weighted Average Price (VWAP) Chart
- Historical Volume Chart
- Intraday Volume Chart
- Market Cap Chart
3. Events section: These show major events and updates that have happened related to the coin.
4. News section: Displays news articles relevant to the specific coin. Link to the full article is also specified. This helps the user get updated regarding events that might affect the specified coin market.
5. Search box with auto suggestion to search various coins.

## Technologies and Framework used
- MySQL Database which is hosted on Microsoft Azure.
- React.js for frontend.
- Node.js server to fetch data from the database.
- React Highchart library is used to make the Charts. 