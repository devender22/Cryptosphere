import React from "react";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

export default function Statistic(props){
    let headingStyle={"textAlign":"left","fontSize":"17px","color":"#27c499","fontWeight":"400","padding":"0 50px"};
    let valueStyle={"textAlign":"left","fontSize":"17px","color":"#000","fontWeight":"400","padding":"0 50px"};
    return(
        <div>
        <Row style={{"marginTop":"25px"}}>
            <Col sm={6} style={headingStyle}>{props.heading}</Col>
            <Col sm={6} style={valueStyle}>{props.val}</Col>
        </Row>
        <hr class="line"></hr>
        </div>

    );
}

//https://devsheet.com/loop-through-an-object-using-map-in-react/