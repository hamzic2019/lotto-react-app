import React, {Component} from "react";
import Lottory from './lottory'


export default class App extends Component {
  render(){
    return(
        <div>
          <Lottory title="Lotto" numBalls={6} maxNum={40}/>

          <Lottory title="Lotto" numBalls={3} maxNum={20}/>
        </div>
    )
  }

}