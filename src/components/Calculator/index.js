import React, { Component } from 'react'
import './calculator.scss';

export default class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            ingredient:10,
            employees:1,
            costSavings:0,
            annual:0
        };
    }


    render(){
        return (
            <div className="Calc">
                calculadora<br/>
            </div>
        )
    }
}