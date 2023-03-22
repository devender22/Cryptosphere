import React from "react";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

export default function Statistic(){
    let valueStyle={"textAlign":"center","fontSize":"17px","color":"#27c499","fontWeight":"400"};
    return(
        <div>
        <Row style={{"marginTop":"30px"}}>
            <Col sm={6} style={valueStyle}>24h Low / 24h High</Col>
            <Col sm={6} style={valueStyle}>0.04581</Col>
        </Row>
        <hr class="line"></hr>
        </div>

    );
}

//https://devsheet.com/loop-through-an-object-using-map-in-react/