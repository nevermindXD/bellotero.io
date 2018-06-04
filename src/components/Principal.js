import React,{ Component } from 'react';

import MyNavbar from './Navbar';
import Main from "./Main";
// import Companies from './Companies';
// import Description from './Description';
// import Percentage from './Percentage';
// import Customers from './Customers';
// import Calculator from './Calculator';
 import Ready from './Ready';
// import Sitemap from './Sitemap'
import Footer from './Footer'


export default class Principal extends Component{
    
    render(){
        return(
            <div>
                <MyNavbar/>
                <Main/>
                 
                {/* 
                <Description/>
                <Companies/>
                <Description/>
                <Customers/>
                <Calculator/>
                <Sitemap /> 
                <Footer />
                <Percentage/>
                <Ready/> */}
                <Ready/>
                <Footer />
            </div>
        )
    }
}

