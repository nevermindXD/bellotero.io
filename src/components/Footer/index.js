import React from 'react'
import { 
    Col,
    Row,
    Container
} from 'reactstrap'

import './footer.scss'

const Footer = () => {
    const  columns = [
        {
            size: 2,
            offset: 1,
            name: '©1909 bellotero.io'
        },
        {
            size: 1,
            offset: 5,
            name: 'Privacy policy'
        }
        ,
        {
            size: 2,
            offset: 0,
            name: 'Terms of Service'
        }
    ]
    return (
        <Container fluid className='footer'>
            <Row >
                {
                    columns.map(column => (
                        <Col className='text-footer'
                            xl={{size: column.size, offset: column.offset }} 
                            lg={{size: column.size, offset: column.offset }} 
                            md={{size: column.size, offset: column.offset }} 
                            xs={12} > 
                            {column.name} 
                            </Col>
                        )
                    )
                }
            </Row>
        </Container>
    )
}

export default Footer