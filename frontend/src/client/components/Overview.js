import React from 'react';
import About from './elements/About';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PriceStatistics from './elements/PriceStatistics';
import Stack from 'react-bootstrap/Stack';
import ROI from './elements/ROI';
import GraphOverview from './elements/GraphOverview';

function Overview(){
    return(
        <div id="action1">
            <Container>
            <h3 className="section-heading" style={{"marginBottom":"60px"}}>Overview</h3>
                <Row>
                    <Col sm={5}> <Stack gap={2} >
                    <Col ><PriceStatistics></PriceStatistics></Col>
                    <Col ><ROI></ROI></Col>
                    </Stack></Col>
                    <Col sm={7}> <Stack gap={2} >
                    <Col ><About></About></Col>
                    <Col ><GraphOverview></GraphOverview></Col>
                    </Stack></Col>

                    {/* <Stack gap={2}>
                    <Col sm={7}><GraphOverview></GraphOverview></Col>
                    <Col sm={7}><ROI></ROI></Col>
                    </Stack> */}
                </Row>
            </Container>
            

        </div>
    );
}


export default Overview;
