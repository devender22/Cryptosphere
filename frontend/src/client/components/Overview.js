import React from 'react';
import About from './elements/About';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PriceStatistics from './elements/PriceStatistics';
import Stack from 'react-bootstrap/Stack';
import ROI from './elements/ROI';
import GraphOverview from './elements/GraphOverview';
import BackToTopButton from './BackToTopButton';
import Navbar from './Navbar';
import Footer from './Footer';
function Overview(){
    return(
        <div id="action1" className="Main">
            <Navbar c={1}/>
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
            <Footer></Footer>
            <BackToTopButton/>
        </div>
    );
}


export default Overview;
