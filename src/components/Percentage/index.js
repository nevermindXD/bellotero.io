
import React from 'react';
import './percentage.scss'; 
import {
    Row,
    Col,
    Container } from 'reactstrap';



const Percentage = () => {
    return (
        <div>
            <Container fluid >
                        <Row c>
                            <Col xl={4} lg={4} mg={4} xs={12} className="PhotoPercentage1">1</Col>
                            <Col xl={4} lg={4} mg={4} xs={12} className="PhotoPercentage2">1</Col>
                            <Col xl={4} lg={4} mg={4} xs={12} className="PhotoPercentage3">1</Col>
                        </Row>
                </Container>
        </div>
    )
}


export default Percentage;