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
                <Statistic heading="Current Price" val={intprice!==0?intprice.toFixed(5):"Loading..."}></Statistic>
                <Statistic heading="Previous Day  Price" val={dailyprice!==0?dailyprice.toFixed(5):"Loading..."}></Statistic>
                <Statistic heading="Market CAP" val={mCAP!==0?mCAP.toFixed(3):"Loading..."}></Statistic>
                <Statistic heading="VWAP" val={VWAP!==0?VWAP.toFixed(5):"Loading..."}></Statistic>
                <Statistic heading="Volume" val={volume!==0?volume.toFixed(5):"Loading..."}></Statistic>
                <Statistic heading="NVT Ratio" val={mCAP!==0?(mCAP/volume).toFixed(5):"Loading..."}></Statistic>
            </div>
        </div>
    );
}

export default PriceStatistics;