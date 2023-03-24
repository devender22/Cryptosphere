import React from 'react';
import axios from 'axios';
import Overview from '../components/Overview';

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
    </div>
  );
}

export default HomePage;