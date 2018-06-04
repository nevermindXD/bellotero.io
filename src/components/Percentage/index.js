
import React from 'react';
import './percentage.scss'; 
import {
    Row,
    Col,
    Container } from 'reactstrap';



const Percentage = () => {

    const contentCol=[
        {
            class:'PhotoPercentage1',
            num: '50',
            sym: '%',
            firstLine: 'SAVED IN',
            secondLine: 'BOOKKEEPING COSTS',
            classDiv:'centerText'
        },
        {
            class:'PhotoPercentage2',
            num: '100',
            sym: 'h',
            firstLine: 'AND MORE SAVED IN',
            secondLine: 'BOOKKEEPING TIME',
            classDiv:'centerText'
        },
        {
            class:'PhotoPercentage3',
            num: '25',
            sym: '%',
            firstLine: 'DECREASE IN',
            secondLine: 'FOOD COSTS',
            classDiv:'centerText'
        }
    ]

    return (
        <div>
            <Container fluid >
                        <Row >
                            {
                                contentCol.map((cont,i) => (
                                    <Col xl={4} 
                                        lg={4} 
                                        mg={4} 
                                        xs={12} 
                                        className={cont.class}>
                                        <p class="centerText" align="center">
                                            <span className="layer">{cont.num}</span>
                                            <span className="layerPer">{cont.sym}</span><br/>

                                            <span className="textPercentage">
                                                {cont.firstLine}<br/>
                                                {cont.secondLine}
                                            </span>
                                        </p>
                                    </Col>
                                ))
                            }
                        </Row>
                </Container>
        </div>
    )
}


export default Percentage;