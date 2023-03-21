import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import HC_exporting from 'highcharts/modules/exporting';
import transformData from "../../utils/transformdata";
import StockChart from "./StockChart";
import ChartPlot from ".";
import IntradayChartPlot from "./IntradayChartplot";

require('highcharts/indicators/indicators')(Highcharts)
require('highcharts/indicators/pivot-points')(Highcharts)
require('highcharts/indicators/macd')(Highcharts)
require('highcharts/modules/exporting')(Highcharts)
require('highcharts/modules/map')(Highcharts)


function IntradayChart() {
    const [options, setOptions] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [chartData, setChartData] = useState([]);
    const url = "http://localhost:5000/intraday-prices";

    useEffect(() => {
        setIsLoading(true);
        const fetchRecords = async () => {           
            let response, responseData
            try {
                response = await fetch(url);
                responseData = await response.json();
            } catch (err) {
                if (err) window.alert("SOME ERROR OCCURED")
            }


            console.log(responseData)

            const categories = [];
            const seriesData = [];
            const candleStickData = [];
            responseData.data.map((item) => {
                categories.push(Date(item.DateTime));
                seriesData.push(parseFloat(item.Close));
                candleStickData.push([new Date(item.DateTime).getTime(), item.Open, item.High, item.Low, item.Close])
            });

            setChartData(candleStickData)

            setOptions({
                title: {
                    text: `Candlestick Data`
                },
                xAxis: {
                    categories: categories
                },
                yAxis: {
                    title: {
                        text: "Price ($)"
                    }
                },
                tooltip: {
                    crosshairs: true,
                    shared: true
                },
                chart: {
                    zoomType: 'x'
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },

                 plotOptions: {
                    
                     line: {
                         dataLabels: {
                             enabled: false
                         },
                     }
                 },
                series: [
                    {
                        type: "candlestick",
                        name: 'Candle Stick',
                        color: "#7393B3",
                        data: candleStickData,
                        zIndex: 1,

                    }
                ]
            });


            setIsLoading(false);
        }

        fetchRecords();

    }, []);

    return (
        <>
        {}
            {chartData.length > 0 ?

                <IntradayChartPlot
                    data={chartData} /> : <>LOADING...</>
            }
        </>
    );
}

export default IntradayChart;