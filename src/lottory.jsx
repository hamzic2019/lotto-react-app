import React, {Component} from "react";
import Ball from './ball';

export default class Lottory extends Component {
  state = {
    numbers: []
  }
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  }
  generateLottoNumbers = () => {
    let nummbers = [];
    for(let i = 0; i < this.props.numBalls; i++){
      let rand = Math.floor(Math.random() * this.props.maxNum);
      nummbers.push(rand)
    }
    this.setState({numbers: [...nummbers]})
  }
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        {this.state.numbers.map((n) => <Ball key={n + Math.random()} value={n} />)}
        <br /><br /><br /><br />
        <button onClick={this.generateLottoNumbers}>Generate</button>
      </div>
    );
  }
}