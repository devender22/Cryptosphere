import Highcharts from 'highcharts';
import Chart from "react-apexcharts";
import { API_ENDPOINT, OPTIONS_OHLC, OPTIONS_VOLUME } from './Constants';
import React, { useState, useEffect } from "react";
import transformData from '../../utils/transformdata';
import Spinner from './Spinner';
import data from "./data"

const Charts = () => {

  const [fromDate, setFromDate] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [seriesOHLC, setSeriesOHLC] = useState([{
    data: [{
      x: new Date(1538778600000),
      y: [6629.81, 6650.5, 6623.04, 6633.33]
    }]
  }]);

  const [seriesVolume, setSeriesVolume] = useState([{
    data: [{
      x: 20,
      y: 54
    }]
  }]);

  const [optionsOHLC, setOptionsOHLC] = useState();

  const [optionsVolume, setOptionsVolume] = useState();

  useEffect(() => {
    setOptionsOHLC(OPTIONS_OHLC);
    setOptionsVolume(OPTIONS_VOLUME);
  }, [])


  const handleChange = (e) => {
    setFromDate(e.target.value);
  }

  const handleLocal = () => {
    setLoading(true);
    const { ohlc_data, volume_data } = transformData(data);
    setSeriesOHLC([{ data: ohlc_data }])
    setSeriesVolume([{ data: volume_data }]);
    setLoading(false);
    setShow(true);
  }

  const handleAPI = async () => {

    setShow(false);
    setLoading(true);

    let url = `${API_ENDPOINT}`;
    if (fromDate !== "") {
      const from_query = `?from=${new Date(fromDate).toISOString()}`;
      url += from_query;
    }
    const response = await fetch(url);
    const data = await response.json();
    const { ohlc_data, volume_data } = transformData(data.data);
    setSeriesOHLC([{ data: ohlc_data }])
    setSeriesVolume([{ data: volume_data }]);
    setLoading(false);
    setShow(true);
  }

  return (
    <div className="app">
      {loading && <Spinner />}
      <h1 className="heading">OHLCV Data plot using Apex Charts</h1>
      <div className="centerAlign">
        <div>
          <button className="btn localbtn" onClick={handleLocal}>
            Use Local Data
          </button>
        </div>
        <span>OR</span>
        <div>
          <label htmlFor="datefilter" >Get Value from a particular date</label>
          <input id="datefilter" type="datetime-local" className="datefield" value={fromDate} onChange={handleChange} />
          <button className="btn apibtn" onClick={handleAPI}>
            Fetch
          </button>
        </div>
      </div>

      {show && (<div className="chart_area flex">
        <div className="section ohlc_section">
          <Chart
            options={optionsOHLC}
            series={seriesOHLC}
            type="candlestick"
          />
        </div>

        <div className="section volume_section">
          <Chart
            options={optionsVolume}
            series={seriesVolume}
            type="bar"
          />
        </div>
      </div>)}
    </div>
  );
}

export default Charts;