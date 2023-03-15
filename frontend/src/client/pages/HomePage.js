import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Info from '../components/Info';
import News from '../components/News';
import BackToTopButton from '../components/BackToTopButton';
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
      <BackToTopButton />
      <Navbar/>
      <Info/>
      <News/>
      
    </div>
  );
}

export default HomePage;