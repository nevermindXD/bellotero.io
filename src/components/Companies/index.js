import React from 'react'
import './companies.scss' 
import {Container,
        Row,
        Col} from 'reactstrap';



const Companies = () => {
    const logos = [

        {
            size: 2,
            offset: 0,
            image: 'http://res.cloudinary.com/dfm5xzcsq/image/upload/v1528058674/logo-1_3x.png'
        },
        {
            size: 2,
            offset: 0,
            image: 'https://res.cloudinary.com/dfm5xzcsq/image/upload/v1528057889/logo-2_3x.jpg'
        },
        {
            size: 2,
            offset: 0,
            image: 'https://res.cloudinary.com/dfm5xzcsq/image/upload/v1528057889/logo-3_3x.jpg'
        },
        {
            size: 2,
            offset: 0,
            image: 'https://res.cloudinary.com/dfm5xzcsq/image/upload/v1528057889/logo-4_3x.jpg'
        },
        {
            size: 2,
            offset: 0,
            image: 'https://res.cloudinary.com/dfm5xzcsq/image/upload/v1528057889/logo-5_3x.jpg'
        },
        {
            size: 2,
            offset: 0,
            image: 'https://res.cloudinary.com/dfm5xzcsq/image/upload/v1528057889/logo-6_3x.jpg'
        },
    ];


    return (
        <Container fluid className='Rectangle-4'>
            <Row fluid>
                {
                    logos.map(logo => (
                        <Col
                            xl={{size: logo.size, offset: logo.offset }} 
                            lg={{size: logo.size, offset: logo.offset }} 
                            md={{size: logo.size, offset: logo.offset }} 
                            xs={12} > 
                            <img src={logo.image} alt='' className='logo1'/>
                            </Col>
                        )
                    )
                }
            </Row>
        </Container>
    )
}


export default Companies;