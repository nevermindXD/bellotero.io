import React from 'react'
import './customers.scss' 
import { UncontrolledCarousel,Row,Col } from 'reactstrap';


const Customers = () => {
    const items = [
        {
            src:'http://res.cloudinary.com/dfm5xzcsq/image/upload/v1528063998/outdoor_restaurant_at_sunset-wallpaper-960x600.jpg',
            altText:'1',
            caption:'1',
            header:'1',
        },
        {
            src:'http://res.cloudinary.com/dfm5xzcsq/image/upload/v1528063998/tellers_restaurant_and_bar__lawrence_kansas-wallpaper-960x600.jpg',
            altText:'2',
            caption:'2',
            header:'2',
        }
    ];



    return (
        <div className='Rectangle-6'>
                <Row>
                <Col className='text-footer'
                            xl={{size: 6, offset: 3 }} 
                            lg={{size: 6, offset: 3 }} 
                            md={{size: 6, offset: 3 }} 
                            xs={12} > 
                            <UncontrolledCarousel items={items} className="carousel"/>
                            </Col>
                </Row>
            
        </div>
    )
}


export default Customers;