### Connect to the server and install dependencies
Go to the 'server' folder and type :
- ``` npm init -y ``` :  This will install the node dependencies
- ``` npm i express ``` : This will install express
- ``` npm i mysql2 ``` : To link Node.js server with MySQL

To run the server, type ``` node index.js ``` after getting into the server folder.

Currently, the server runs on localhost:5000. This can be changed by specifying the port in the index.js file.

### Endpoints:
- http://localhost:5000/eod-data : Gives details on the end of the day data.
-  http://localhost:5000/intraday-prices : Gives prices and other details for the current day.
- http://localhost:5000/other-metrics : Gives details on other metrics like SPX index, Gold price etc.