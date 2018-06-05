import React from 'react'
import './companies.scss' 
import {Container,
        Row,
        Col} from 'reactstrap';



const Companies = () => {
    const logos = [

        {
            classImg:'logo1',
            size: 2,
            offset: 0,
            image: 'http://res.cloudinary.com/dfm5xzcsq/image/upload/v1528058674/logo-1_3x.png'
        },
        {
            classImg:'logo2',
            size: 2,
            offset: 0,
            image: 'https://res.cloudinary.com/dfm5xzcsq/image/upload/v1528057889/logo-2_3x.jpg'
        },
        {
            classImg:'logo2',
            size: 2,
            offset: 0,
            image: 'https://res.cloudinary.com/dfm5xzcsq/image/upload/v1528057889/logo-3_3x.jpg'
        },
        {
            classImg:'logo2',
            size: 2,
            offset: 0,
            image: 'https://res.cloudinary.com/dfm5xzcsq/image/upload/v1528057889/logo-4_3x.jpg'
        },
        {
            classImg:'logo2',
            size: 2,
            offset: 0,
            image: 'https://res.cloudinary.com/dfm5xzcsq/image/upload/v1528057889/logo-5_3x.jpg'
        },
        {
            classImg:'logo2',
            size: 2,
            offset: 0,
            image: 'https://res.cloudinary.com/dfm5xzcsq/image/upload/v1528057889/logo-6_3x.jpg'
        },
    ];


    return (
        <Container fluid className='Rectangle-4'>
            <Row  className='rowCompanies'>
                {
                    logos.map((logo,i) => (
                        <Col
                            xl={{size: logo.size, offset: logo.offset }} 
                            lg={{size: logo.size, offset: logo.offset }} 
                            md={{size: logo.size, offset: logo.offset }} 
                            xs={6} className='a1' key={i}> 
                            <img src={logo.image} alt='' className={logo.classImg}/>
                            </Col>
                        )
                    )
                }
            </Row>
        </Container>
    )
}


export default Companies;