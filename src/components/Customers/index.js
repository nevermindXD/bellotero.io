import React from 'react'
import './customers.scss' 
import { UncontrolledCarousel,Row,Container } from 'reactstrap';


const Customers = () => {
    const items = [
        {
            src:'http://res.cloudinary.com/dfm5xzcsq/image/upload/v1528063998/outdoor_restaurant_at_sunset-wallpaper-960x600.jpg',
            altText:'1',
            caption:'Saving more',
            header:'Everyday',
        },
        {
            src:'http://res.cloudinary.com/dfm5xzcsq/image/upload/v1528063998/tellers_restaurant_and_bar__lawrence_kansas-wallpaper-960x600.jpg',
            altText:'2',
            caption:'More time',
            header:'More savings',
        }
    ];


    return (
        <Container className='Rectangle-6'>
                <Row>
                   <UncontrolledCarousel items={items} className="carousel"/> 
                </Row>
            
        </Container>
    )
}


export default Customers;