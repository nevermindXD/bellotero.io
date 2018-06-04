import React from 'react';
import './sitemap.scss'; 
import {Container, Row, Col} from 'reactstrap'; 

const Sitemap = () => {

    const sites = [
        'Features',
        'Solutions',
        'Stories',
        'About',
        'Blog'
    ];

    const socials =[
        {
            name:'Facebook',
            link:'https://www.facebook.com/parcellla/'
        },
        {
            name:'Twitter',
            link:'https://twitter.com/Guadalajara'
        },
        {
            name:'LinkedIn',
            link:'https://www.linkedin.com/in/juan-carlos-olivier-jasso-175b61b8/'
        },
        {
            name:'Instagram',
            link:'https://www.instagram.com/orizaba_pueblomagico/'
        }
    ];

    const support =[
        'support@bellotero.com',
        '(555) 555-5555',
        'Chat now'
    ];


    return (
        <Container fluid className='sitemap'>
            <Row className="RowSiteMap">
                <Col 
                        xl={{size: 2, offset: 1 }}
                        lg={{size: 2, offset: 1 }}
                        mg={{size: 2, offset: 1 }}
                        xs={6}>
                        <img className="bellotero-logo-white" alt="" src={require('../../img/bellotero-logo-white.svg')}/>
                </Col>

                <Col className=""
                        xl={3}
                        lg={3}
                        mg={3}
                        xs={6}>
                        <p className="TitlesSitemap">Bellotero.io</p><br/>
                        {sites.map((site,i) => (
                            <p className="SubSitemap" key={i}> {site}</p>
                        ))}
                </Col>
                <Col className=""
                        xl={3}
                        lg={3}
                        mg={3}
                        xs={6}>
                        <p className="TitlesSitemap">Social</p><br/>
                        {socials.map((social,i) => (
                            <p key={i}><a href={social.link }className="SubSitemap">{social.name}</a></p>
                        ))}
                </Col>
                <Col className=""
                        xl={3}
                        lg={3}
                        mg={3}
                        xs={6}>
                        <p className="TitlesSitemap">Support</p><br/>
                        {support.map((sup,i)=> (
                            <p className="SubSitemap" key={i}> {sup}</p>
                        ))}
                        <img className="appsStyle" alt="" src={require('../../img/app-store.svg')}/><br/><br/>
                        <img className="appsStyle" alt="" src={require('../../img/google-play@3x.png')}/>
                       
                        
                </Col>
            </Row>
        </Container>
    )
}


export default Sitemap;