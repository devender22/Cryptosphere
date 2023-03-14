//building a slim server
//refer: https://blog.logrocket.com/build-rest-api-node-express-mysql/

const express = require('express');
const app = express();
const port = 5000;
const eod_data_Router = require("./routes/eod_data");
const intraday_prices_Router = require("./routes/intraday_prices");
const other_securities_Router = require("./routes/other_securities");

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

app.use("/eod-data", eod_data_Router);
app.use("/intraday-prices", intraday_prices_Router);
app.use("/other-securities", other_securities_Router);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => {
    console.log(`Cryptosphere listening at http://localhost:${port}`);
});