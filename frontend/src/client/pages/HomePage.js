import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Info from '../components/Info';
import News from '../components/News/News';
import BackToTopButton from '../components/BackToTopButton';
import Overview from '../components/Overview';
import EODChart from '../components/Charts/Eod_graph';
import IntradayChart from '../components/Charts/intraday_graph';
import EODChartplot from '../components/Charts/IntradayChartplot';
import ChartSection from '../components/Charts/ChartSection';
import Events from '../components/Events/Events';
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
      <BackToTopButton />
      <Navbar />
      <Overview />
      <hr></hr>
      <ChartSection/>
      <hr></hr>
      {/* <Events></Events> */}
      {/* <hr></hr> */}
      <News />
     {/*  <EODChart /> */}
      

    </div>
  );
}

export default HomePage;