import React from 'react'
import './description.scss' 
import {Row,
        Col,
        Container} from 'reactstrap';



const Description = () => {
    return (
        <Container fluid className='Description'>
            <Row>
                <Col className=""
                        xl={{size: 5, offset: 1 }}
                        lg={{size: 5, offset: 1 }}
                        mg={{size: 5, offset: 1 }}
                        xs={12}>
                        <p>Bellotero.io is the digital solution that <br/>
                            gives you fast, accurate, automated accounts payable and smart, <br/>
                            business-transforming insights. </p>
                        <br/>
                        <br/>
                        <p>
                            Get the full picture.<br/>
                            In half the time.
                        </p>
                        <p>
                            Threads keep all your conversations clearly <br/>
                            separated by topic so replies won’t <br/>
                            get buried in an endless stream of group chat. 
                        </p>
                        <p>Learn more</p>
                </Col>
                <Col className=""
                    xl={6}
                    lg={6}
                    mg={6}
                    xs={12}>
                    <img alt="" src={"https://res.cloudinary.com/dfm5xzcsq/image/upload/v1527956516/intro-img-1_3x.png"} width="300px"/>
                </Col>

                <Col className=""
                        xl={{size: 6, offset: 1 }}
                        lg={{size: 6, offset: 1 }}
                        mg={{size: 6, offset: 1 }}
                        xs={12}>
                        <img alt="" src={"https://res.cloudinary.com/dfm5xzcsq/image/upload/v1527956516/intro-img-2_3x.png"} width="300px"/>
                </Col>
                <Col className=""
                    xl={5}
                    lg={5}
                    mg={5}
                    xs={12}>
                        <p>
                            Timesaving, <br/>
                            moneymaking.
                        </p>
                        <p>
                         Bellotero.io automatically turns your <br/>
                         threaded conversations into a searchable <br/>
                         catalog of topics.
                        </p>
                        <p>Learn more</p>
                </Col>
            </Row>
        </Container>
    )
}


export default Description;