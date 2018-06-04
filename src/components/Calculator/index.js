import React, { Component } from 'react'
import './calculator.scss';
import {Row, Col} from 'reactstrap';

export default class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            ingredient:10,
            employees:1,
            costSavings:0,
            annual:0
        };
    }


    render(){
        return (
            <div className="Calc">
                            <Row>
                <Col className=""
                        xl={{size: 6, offset: 1 }}
                        lg={{size: 6, offset: 1 }}
                        mg={{size: 6, offset: 1 }}
                        xs={12}>
                        <p>
                        See how much you can <br/>
                        save with Bellotero.io
                        </p>

                        <p>
                        With Bellotero.io you save time and money make real-time <br/>
                        decisions that boost your business and your bottom line. Get less <br/>
                        wrongfully blocked payments, save time on bookkeeping and no <br/>
                        need to worry about safety. 
                        </p>
                       
                       <p>
                            Monthly ingredient spending
                       </p>
                </Col>
                <Col className=""
                    xl={2}
                    lg={2}
                    mg={2}
                    xs={12}>
                    <p>
                        Your estimated <br/>
                        annual savings
                    </p>
                </Col>
                <Col className=""
                    xl={3}
                    lg={3}
                    mg={3}
                    xs={12}>
                    <p>
                        Estimated food <br/>
                        cost savings
                    </p>
                </Col>
                </Row>
            </div>
        )
    }
}