import React from 'react'
import './ready.scss' 
import {Col,Row,Container,InputGroup, InputGroupAddon, Input,Button} from 'reactstrap';



const Ready = () => {
    return (
        <Container fluid className='Rectangle-11'>
            <Row>
                <Col className="Ready-to-get-started"
                    xl={{size: 5, offset: 1 }}
                    lg={{size: 5, offset: 1 }}
                    mg={{size: 5, offset: 1 }}
                    xs={12}>
                    Ready to get started<br/>
                    with Bellotero<span className="text-style-1">.io</span>?
                    
                </Col>
                <Col className="No-more-manual-data"
                    xl={5}
                    lg={5}
                    mg={5}
                    xs={12}>
                    <p>
                        No more manual entry<br/>
                        Hands off. Thumbs up
                    </p>
                <InputGroup>
                    <Input placeholder="Your email address" name="readyIn"/>
                        <InputGroupAddon addonType="append">
                        <Button className="buttonReady" color="buttonReady"><span className="label1">Request a demo</span></Button>
                    </InputGroupAddon>
                </InputGroup>

                </Col>
            </Row>
        </Container>
    )
}


export default Ready;