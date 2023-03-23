import React,{useState,useEffect} from "react";
import Statistic from "./Statistic";
import axios from 'axios';

function PriceStatistics(){
    const [intprice,setIntPrice]=useState(0);
    const [dailyprice,setDailyPrice]=useState(0);
    const [mCAP,setMCAP]=useState(0);
    const [VWAP,setVWAP]=useState(0);
    const [volume,setVolume]=useState(0);

    function getData() {
        var url = 'http://localhost:5000/eod-data'
        axios.get(url)
          .then(response => {
            let obj=response.data["data"];
            setIntPrice(obj[obj.length-1]["Close"])
            setMCAP(obj[obj.length-1]["MktCap"])
            setVWAP(obj[obj.length-1]["VWAP"])
            setVolume(obj[obj.length-1]["Volume"])
          })
          .catch(error => {
            console.log(error);
          });


          url = 'http://localhost:5000/intraday-prices'
        axios.get(url)
          .then(response => {
            let obj=response.data["data"];
            setDailyPrice(obj[obj.length-1]["Close"])
            
          })
          .catch(error => {
            console.log(error);
          });

      }

      useEffect(getData,[]);
    
    return(
        <div className="overview-box" style={{"height":"470px"}}>
            <div className="box-heading">ETH Price Statistics (in USD)</div>
            <div style={{"padding":"20px"}}>
                <Statistic heading="Intraday Price" val={intprice.toFixed(5)}></Statistic>
                <Statistic heading="Daily Price" val={dailyprice.toFixed(5)}></Statistic>
                <Statistic heading="Market CAP" val={mCAP.toFixed(3)}></Statistic>
                <Statistic heading="Volume WAP" val={VWAP.toFixed(5)}></Statistic>
                <Statistic heading="Volume" val={volume.toFixed(5)}></Statistic>
                
            </div>
        </div>
    );
}

export default PriceStatistics;