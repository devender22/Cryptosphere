# Sprint plan for Cryptosphere

## Week1 - 01/29 to 02/05

### Prerequisite
#### Blockchain
- [X] https://www.youtube.com/watch?v=2yJqjTiwpxM
- [X] https://www.youtube.com/watch?v=_160oMzblY8&t=382s

#### Ethereum basic info
- [X] https://ethereum.org/en/developers/docs/

#### C++ web server (Yashasweni + Tanya)
- [X] Explore various servers
- [X] Implement a basic prototype to host few API end points
- [X] Evaluate support for web sockets 

#### C++ DB connectivity (Abhirami)
- [X] Start sample SQL server instance in dev
- [X] APIs to connect to SQL server
- [X] Prototype implementation for this connectivity

#### Python (Anushka)
- [X] Explore web scrappers
- [X] https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR
- [X] Explore poloniex APIs - https://poloniex.com/public?command=returnChartData&currencyPair=BTC_ETH&start=1435699200&end=9999999999&period=14400

#### UI development (Paridhi)
- [X] Try to implement a basic node server with single page built in react
- [X] Learn about npm
- [X] Evaluate high charts

## Week2 - 02/13 to 02/19

#### JS fundamentals
- [ ] Learn basic JS (recommended book - You don't know JS)

#### UI development (Yashasweni & Paridhi)
- [ ] Implement basic react application with redux datastore (https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867)
- [ ] Implement search page with autocomplete
- [ ] Clicking on search result should render an empty/dummy page
- [ ] Create PR of work done

#### Backend (Anushka, Abhirami & Tanya)
- [ ] Prepare list of data sources in our application
- [ ] Come up with SQL design and create sample schema for those tables
- [ ] Write python code to fetch market data of Ethereum from poloniex, insert it in DB.
- [ ] APIs to connect to SQL server
- [ ] Create PR of work done

## Week3 - 02/20 to 02/26

#### UI development (Yashasweni & Paridhi)
- [ ] Continue with previous week items
- [ ] Integrate redux data store
- [ ] Raise a PR

#### Backend (Anushka, Abhirami & Tanya)
- [ ] Continue with previous week items


## Week4 - 02/27 to 03/05

#### UI development (Yashasweni & Paridhi)
- [ ] Review PR1 - Lega
- [ ] Review mockups and pass feedback - applicable for all mentees and mentor
- [ ] Integrate redux data store
- [ ] Build search page with all functionalities working

#### Backend (Anushka, Abhirami & Tanya)
- [ ] SQL server installation guidelines - Abhirami & Tanya
- [ ] SQL table design - discuss among all mentees
- [ ] CoinMetrics script for reading historical and T date data and insert it in DB (for ETH and BTC)
- [ ] Research about other APIs which can give price for Gold, SPX Index, USD (dump it in DB)
- [ ] Start node server which will connect to MySQL DB, add endpoints which will give historical data and T date data
- [ ] Create PR
- [ ] Newsletter - explore different websites, come up with DB table that we will use, think about how to remove duplicates (Abhirami and Paridhi)

## Week5 - 03/04 to 03/11

#### UI development (Yashasweni & Paridhi)
- [ ] Review PR1 - Lega
- [ ] Review mockups and pass feedback - applicable for all mentees and mentor
- [ ] Integrate redux data store - Paridhi to share dev branch if she is facing any issue
- [ ] Build search page with all functionalities working

#### Backend (Anushka, Abhirami & Tanya)
- [ ] SQL server (python insert dev branch) - Anushka to share with all for debugging purpose
- [ ] SQL table design - make suggested changes
- [ ] CoinMetrics script for reading historical and T date data and insert it in DB (for ETH and BTC) - Create PR
- [ ] Research about other APIs which can give price for Gold, SPX Index, USD (dump it in DB) - WIP
- [ ] Start node server which will connect to MySQL DB, add endpoints which will give historical data and T date data (express server - read about it)
- [ ] Create PR
- [ ] Newsletter - explore different websites, come up with DB table that we will use, think about how to remove duplicates (Abhirami and Paridhi)

## Week6 - 03/12 to 03/18

#### UI development (Yashasweni & Paridhi)
- [ ] Merge reviewed code in master
- [ ] Create 3 PRs for new code, Lega to review
- [ ] Complete impl of Overview, Charts and News pages (Abhirami can help in Charts page impl)
- [ ] Integrate with real backend data(changes would be needed in existing routes)

#### Backend (Anushka, Abhirami & Tanya)
- [ ] Create PR for existing code
- [ ] Debug extra time taken in insert operation - could be related to replication
- [ ] Anushka for Gold, USD and SPX index download and create PR
- [ ] Research about other APIs which can give price for Gold, SPX Index (dump it in DB) - WIP
- [ ] Newsletter - explore different websites, come up with DB table that we will use, think about how to remove duplicates (Tanya & Anushka)
- [ ] Explore local linux cron and schedule download jobs for data downloads
