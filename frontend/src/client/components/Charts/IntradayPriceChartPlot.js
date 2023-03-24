import React from 'react'
import { render } from 'react-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Highcharts from 'highcharts/highstock'
import StockChart from './StockChart'

require('highcharts/indicators/indicators')(Highcharts)
require('highcharts/indicators/pivot-points')(Highcharts)
require('highcharts/indicators/macd')(Highcharts)
require('highcharts/modules/exporting')(Highcharts)
require('highcharts/modules/map')(Highcharts)

const chartOptions = {
    title: {
        text: ''
    },
    series: [{
        data: [1, 2, 3],

    }]
}

class IntradayPriceChartPlot extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            options: {
                series: chartOptions.series
            },
            chartOptions: {
                yAxis: [{
                    height: '75%',
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: 'ETH'
                    }
                }
                ],
                series: [{
                    data: this.props.data,
                    type: this.props.chartType,
                   
                    type: 'candlestick',//toggle between candlestick and line
                    name: 'Price',
                    id: 'price'
                }, {
                    type: 'pivotpoints',
                    zIndex: 0,
                    lineWidth: 1,
                    dataLabels: {
                        overflow: 'none',
                        crop: false,
                        y: 4,
                        style: {
                            fontSize: 9
                        }
                    }
                }
                ]
            }
        }
        this.onClick = this.onClick.bind(this)

        console.log("props", this.props)
        console.log("props", this.props.chartType)

    }

    onClick() {
        this.setState({
            options: {
                series: [{
                    data: [1, 2, 3]
                },
                {
                    data: [2, 3, 1]
                },
                {
                    data: [3, 2, 1]
                }]
            }
        })
    }

    render() {
        return <div>
            <Row>
                <Col xs={12}>
                    <div className="overview-box" style={{ height: "500px" }}>
                    <div className="box-heading">Intraday Price <button className="btn-badge">
                    Candlestick Chart
        </button></div>
                        
                        <Row>
                            <Col s={12}>
                                <StockChart options={this.state.chartOptions} highcharts={Highcharts} />    
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    }
}

export default IntradayPriceChartPlot