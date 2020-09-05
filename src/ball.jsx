import React, {Component} from "react";


export default class Ball extends Component {
  
  render(){
    return <h1 style={{float:'left', margin: '15px'}}>{this.props.value}</h1>
  }
}