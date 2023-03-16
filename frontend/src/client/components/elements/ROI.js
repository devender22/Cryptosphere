import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

function ROI(){
    const [gold,setGold]=useState(0);
    const [spx,setSpx]=useState(0);
    let buttonStyle={"background-color":"#27c499" ,"border":"1px solid #27c499","width":"200px"};
    let weightStyle={"fontWeight":"bold"};
    function getData(){
        var url='http://localhost:5000/other-securities'
        axios.get(url)
        .then(response => {
          var obj=response.data['data'][response.data['data'].length-1];
          console.log(obj);
          setGold(obj['Gold']);
          setSpx(obj['SPX_Index']);
          console.log(gold);
          console.log(spx);
        })
        .catch(error => {
          console.log(error);
        });
      }

      useEffect(getData,[]);

    return(
        <div className="overview-box" style={{"height":"200px"}}>
             <div className="box-heading">ETH Return of Investment</div>
             <div style={{"padding":"20px"}}>
                <Row>
                    <Col sm={5} style={weightStyle}>Gold</Col>
                    <Col sm={1}>:</Col>
                    <Col sm={6}><Button style={buttonStyle}>{gold}</Button></Col>
                </Row>
                <br></br>
                <Row>
                    <Col sm={5} style={weightStyle}>SPX Index</Col>
                    <Col sm={1}>:</Col>
                    <Col sm={6}><Button style={buttonStyle}>{spx}</Button></Col>
                </Row>
             </div>
        </div>
    );
}

export default ROI;