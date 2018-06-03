import React,{ Component } from 'react';


import Sitemap from './Sitemap'
// import Footer from './Footer'
import MyNavbar from './Navbar';
import Percentage from './Percentage';
import Main from "./Main";
import Companies from './Companies';
import Ready from './Ready';
import Calculator from './Calculator';
import Customers from './Customers';
import Description from './Description';



export default class Principal extends Component{
    
    render(){
        return(
            <div>
                <MyNavbar/>
                <Main/>
                <Companies/>
                <Description/>
                <Percentage/>
                <Customers/>
                <Calculator/>
                <Ready/>
                <Sitemap />
                {/* <Footer /> */}
                
            </div>
        )
    }
}

