import React, { Component } from 'react'
import './calculator.scss';
import {Row, Col,Container} from 'reactstrap';

export default class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            ingredient:10,
            employees:1,
        };
    }

    getValue = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    };


    render(){
        const {employees,ingredient} = this.state
        let costSavigs = ingredient * 0.3
        let annual = employees * 1337 + costSavigs;
        costSavigs = costSavigs.toFixed(3);

        return (
            <Container fluid className="Calc">
                <Row className="rowCalculator">
                    <Col className=""
                            xl={{size: 5, offset: 1 }}
                            lg={{size: 5, offset: 1 }}
                            mg={{size: 5, offset: 1 }}
                            xs={12}>
                            <p className="See-how-much-you-can">
                            See how much you can <br/>
                            save with Bellotero.io
                            </p>

                            <p className="With-Belloteroio-yo">
                            With Bellotero.io you save time and money make real-time <br/>
                            decisions that boost your business and your bottom line. Get less <br/>
                            wrongfully blocked payments, save time on bookkeeping and no <br/>
                            need to worry about safety. 
                            </p>
                            <br/>
                        <p className="Monthly-ingredient-s">
                                Monthly ingredient spending
                        </p>
                        <div className="Rectangle">
                            <div className="prue">
                                <span className="numb">{ingredient}</span>
                            </div>
                            <div class="slidecontainer">
                               <span style={{width:`${ingredient-5}%`}} className="marker"/>
                                <input onChange={this.getValue} value={ingredient}
                                  type="range" name="ingredient" min="10" max="100" class="slider" id="ingredient"/>
                              </div>
                        </div>
                        <br/>
                        <p className="Full-time-employees">
                            Full-time employees that process invoices
                        </p>
                        <div className="Rectangle">
                            <div className="prue">
                                <span className="numb">{employees}</span>
                            </div>
                            <div class="slidecontainer">
                              <span style={{width:`${(employees*10)-5}%`}} className="marker"/>
                                <input onChange={this.getValue} value={employees}
                                  // style={{background:bg_empl}}
                                   type="range" name="employees" min="1" max="10" class="slider" id="employees"/>
                              </div>
                        </div>
                    </Col>
                    <Col className="numbers"
                        xl={2}
                        lg={2}
                        mg={2}
                        xs={12}>
                        <p className="Your-estimated-annua">
                            Your estimated <br/>
                            annual savings<br/><br/>
                        <span className="priceSymbol">$</span><span className="priceNumber">{annual}</span>
                        </p>
                    </Col>
                    <Col className="numbers"
                        xl={3}
                        lg={3}
                        mg={3}
                        xs={12}>
                        <p className="Your-estimated-annua">
                            Estimated food <br/>
                            cost savings<br/>
                            <br/>         
                        <span className="priceSymbol">$</span><span className="priceNumber">{costSavigs}</span>
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}