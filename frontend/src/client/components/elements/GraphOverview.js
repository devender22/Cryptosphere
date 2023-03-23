import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import EODChartPlot from "../Charts/EODPriceChartPlot";
import OverviewChart from "./OverviewChart";
import Spinner from "react-bootstrap/Spinner";
import { Button } from "react-bootstrap";

function GraphOverview() {
  const [options, setOptions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState([]);

  const [type, setType] = useState("candlestick");
  const url = "http://localhost:5000/eod-data";
  useEffect(() => {
    setIsLoading(true);
    const fetchRecords = async () => {
      const query = {
        elems: [
          {
            interval: "mly",
            duration: 1,
            name: "avgt",
            reduce: { reduce: "mean" },
            prec: 3,
          },
        ],
      };
      let response, responseData;
      try {
        response = await fetch(url);
        responseData = await response.json();
      } catch (err) {
        if (err) window.alert("SOME ERROR OCCURED");
      }

      console.log(responseData);

      const categories = [];
      const seriesData = [];
      const candleStickData = [];
      const timeSeriesData = [];
      responseData.data.map((item) => {
        categories.push(Date(item.Date));
        seriesData.push(parseFloat(item.Close));
        candleStickData.push([
          new Date(item.Date).getTime(),
          item.Open,
          item.Close,
          item.High,
          item.Low,
        ]);
      });

      setChartData(candleStickData);
      setOptions({
        title: {
          ttext: `Timeseries Data`,
        },
        xAxis: {
          categories: categories,
        },
        yAxis: {
          title: {
            text: "Price ($)",
          },
        },
        tooltip: {
          crosshairs: true,
          shared: true,
        },
        chart: {
          zoomType: "x",
        },
        plotOptions: {
          area: {
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
              },
              stops: [
                [0, Highcharts.getOptions().colors[0]],
                [
                  1,
                  Highcharts.color(Highcharts.getOptions().colors[0])
                    .setOpacity(0)
                    .get("rgba"),
                ],
              ],
            },
            marker: {
              radius: 2,
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1,
              },
            },
            threshold: null,
          },
        },

        /* plotOptions: {
            
             line: {
                 dataLabels: {
                     enabled: false
                 },
             }
         },*/
        series: [
          {
            // type: "candlestick",
            type: "line", //toggle between candlestick and line
            name: "Time Series",
            color: "#7393B3",
            data: timeSeriesData,
            zIndex: 1,
          },
        ],
      });

      setIsLoading(false);
    };

    fetchRecords();
  }, []);

  return (
    <div className="overview-box" style={{ height: "450px" }}>
      <div className="box-heading">
        Chart
        <button className="btn-badge">Ethereum</button>
        <button className="btn-badge" onClick={() => setType("candlestick")}>
          TimeSeries chart
        </button>
        <button className="btn-badge" onClick={() => setType("ohlc")}>
          OHLC
        </button>
      </div>
      {chartData.length > 0 ? (
        <OverviewChart data={chartData} chartType={type} />
      ) : (
        <>
          <div className="Spinner-overview">
            {/* <Button variant="secondary"> */}
            <Spinner
              animation="border"
              role="status"
              style={{ color: "#27c499" }}
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            {/* </Button> */}
          </div>
        </>
      )}
    </div>
  );
}

// dropdown->click->open
//option1->map(state)

export default GraphOverview;
