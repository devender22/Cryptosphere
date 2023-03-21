import React, { useEffect, useState } from "react";
import Highcharts from 'highcharts';
import IntradayVolumeChartPlot from "./IntradayVolumeChartPlot";

require('highcharts/indicators/indicators')(Highcharts)
require('highcharts/indicators/pivot-points')(Highcharts)
require('highcharts/indicators/macd')(Highcharts)
require('highcharts/modules/exporting')(Highcharts)
require('highcharts/modules/map')(Highcharts)


function IntradayVolumeChart() {
    const [options, setOptions] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [chartData, setChartData] = useState([]);
    const url = "http://localhost:5000/intraday-prices";

    useEffect(() => {
        setIsLoading(true);
        const fetchRecords = async () => {
            const query = {
                elems: [
                    {
                        interval: "mly",
                        duration: 1,
                        name: "avgt",
                        reduce: { "reduce": "mean" },
                        prec: 3
                    }]
            }
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
            const timeSeriesData = [];
            responseData.data.map((item) => {
                categories.push(Date(item.DateTime));
                seriesData.push(parseFloat(item.Volume));
                timeSeriesData.push([new Date(item.DateTime).getTime(), item.Volume])
            });

            setChartData(timeSeriesData)
            setOptions({
                title: {
                    text: `Timeseries Data`
                },
                xAxis: {
                    categories: categories
                },
                yAxis: {
                    title: {
                        text: "ETH Volume"
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
                        type: "line",
                        name: 'Time Series',
                        color: "#7393B3",
                        data: timeSeriesData,
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
            { }
            {chartData.length > 0 ?
                <IntradayVolumeChartPlot data={chartData} /> : <>LOADING...</>
            }
        </>
    );
}

export default IntradayVolumeChart;