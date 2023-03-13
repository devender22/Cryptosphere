import React from 'react';
import SearchBox from '../components/SearchBox';
import axios from 'axios';

function HomePage() {

  function getData(){
    var url='http://localhost:5000/eod-data'
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
      <SearchBox />
      <form action="/post" method="post" className="form">
          <button type="submit">Connect</button>
      </form>
      <button onClick={getData} type="submit">Data</button>
    </div>
  );
}

export default HomePage;