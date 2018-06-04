import React, { Component } from 'react'

export default class Abc extends Component {
    constructor(props){
        super(props);
        this.state = {
            ingredient:10,
            employees:1,
            costSavings:0,
            annual:0
        };
    }
    

    getValue = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    };



  render() {
      const  costSavigs = this.state.ingredient * 0.3
      const annual = this.state.employees * 1337 + costSavigs;
    return (
      <div>
        <input 
            type="range" 
            name="ingredient" 
            id="ingredient" 
            min="10" 
            max="100" 
            value={this.state.ingredient} 
            onChange={this.getValue}/>  {this.state.ingredient}<br/>
        <input 
            type="range" 
            name="employees" 
            id="employees" 
            min="1" 
            max="10" 
            value={this.state.employees} 
            onChange={this.getValue}/> {this.state.employees}<br/>
        {annual}<br/>
        {/* {`cost ${this.state.costSavings}`} */}
        {costSavigs}


      </div>
    )
  }
}
