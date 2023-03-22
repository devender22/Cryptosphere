import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Info from '../components/Info';
import News from '../components/News/News';
import BackToTopButton from '../components/BackToTopButton';
import Overview from '../components/Overview';
import EODPriceChart from '../components/Charts/EODPriceChart';
import IntradayPriceChart from '../components/Charts/IntradayPriceChart';
import EODChartplot from '../components/Charts/IntradayPriceChartPlot';
import EODVWAPChart from '../components/Charts/EODVWAPChart';
import EODVolumeChart from '../components/Charts/EODVolumeChart';
import MktCapChart from '../components/Charts/MktCapChart';
import IntradayVWAPChart from '../components/Charts/IntradayVWAPChart';
import IntradayVolumeChart from '../components/Charts/IntradayVolumeChart';
import EODPriceTSChart from '../components/Charts/EODPriceTSChart';
import IntradayPriceTSChart from '../components/Charts/IntradayPriceTSChart';
import ChartSection from '../components/Charts/ChartSection';

function HomePage() {

  function getData() {
    var url = 'http://localhost:5000/eod-data'
    axios.get(url)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }


  return (
    <div class="Main">

      <Overview />
      {/* <hr></hr>
      <ChartSection/>
      <hr></hr>
      <News /> */}

      

    </div>
  );
}

export default HomePage;