
import React from 'react'
import './main.scss' 
import {Col, Row,Container,InputGroup,InputGroupAddon, Input,Button} from 'reactstrap';



const Main = () => {
    return (
        <Container fluid className="Bitmap">

            <Row>
            <Col 
                    xl={{size: 4, offset: 1 }}
                    lg={{size: 4, offset: 1 }}
                    mg={{size: 4, offset: 1 }}
                    xs={12} >
                   <p className="Digitize-your-invoic ">
                        Digitize your invoices <br/>
                        <span className="text-style-1">
                            and create your own <br/>
                            shopping cart <br/>
                        </span>
                   </p>
                   <InputGroup className="inputext" >
                        <Input type="text" placeholder="Your email address" name="mainIn"/>
                            <InputGroupAddon addonType="append">
                            <Button className="buttonMain" color="buttonMain"><span className="label1">Request a demo</span></Button>
                        </InputGroupAddon>
                    </InputGroup>
                    
                </Col>
                <Col className=""
                    xl={5}
                    lg={5}
                    mg={5}
                    xs={12}>
                    <img alt="" src={require('../../img/hero-mockup@2x.png')} className="hero-mockup"/>
                </Col>
            </Row>
        </Container>
    )
}


export default Main;