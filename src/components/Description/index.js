import React from 'react'
import './description.scss' 
import {Row,
        Col,
        Container} from 'reactstrap';

        //Crear otra columna con la imagen arriba de la description pero se muestre con movil y la otra se oculte 


const Description = () => {
    return (
        <Container fluid className='Description'>
            <Row className="IphoneRow">
                <Col 
                        xl={{size: 4, offset: 1 }}
                        lg={{size: 4, offset: 1 }}
                        mg={{size: 4, offset: 1 }}
                        xs={12}>
                        <p className="Belloteroio-is-the">
                            Bellotero.io is the digital solution that <br/>
                            gives you fast, accurate, automated accounts payable and smart, <br/>
                            business-transforming insights. 
                        </p>
                        <br/>
                        <br/>
                        <br/>
                        <p className="Get-the-full-picture">
                            Get the full picture.<br/>
                            In half the time.
                        </p>
                        <p className="Threads-keep-all-you">
                            Threads keep all your conversations clearly <br/>
                            separated by topic so replies won’t <br/>
                            get buried in an endless stream of group chat. 
                        </p>
                        <span className="Learn-more">Learn more &rarr;</span>
                </Col>
                <Col className=""
                    xl={7}
                    lg={7}
                    mg={7}
                    xs={12}>
                    <img alt="" className="intro-img-1" src={"https://res.cloudinary.com/dfm5xzcsq/image/upload/v1527956516/intro-img-1_3x.png"} />
                </Col>
                </Row>
                <Row className="MacRow">
                <Col className=""
                        xl={{size: 6, offset: 1 }}
                        lg={{size: 6, offset: 1 }}
                        mg={{size: 6, offset: 1 }}
                        xs={12}>
                        <img alt="" src={"https://res.cloudinary.com/dfm5xzcsq/image/upload/v1527956516/intro-img-2_3x.png"} className="intro-img-2"/>
                </Col>
                <Col className="MacRight"
                    xl={5}
                    lg={5}
                    mg={5}
                    xs={12}>
                        <p className="Timesaving-moneymak">
                            Timesaving, <br/>
                            moneymaking.
                        </p>
                        <p className="Belloteroio-automat">
                         Bellotero.io automatically turns your <br/>
                         threaded conversations into a searchable <br/>
                         catalog of topics.
                        </p>
                        <span className="Learn-more">Learn more &rarr;</span>
                </Col>
            </Row>
        </Container>
    )
}


export default Description;