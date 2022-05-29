import React, { Component } from 'react'
import '../styles/verusCard.css'
class CountDown extends Component {

  render () {
    return (
      <div className='countDownText'>
        COUNTDOWN:
        <div>
          15
        </div>
        PICK YOUR CARD
      </div>
    )
  }
}

export default CountDown
