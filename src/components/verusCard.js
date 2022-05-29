import React, { Component } from 'react'
import '../styles/verusCard.css'
import CardBackside from '../assets/CardBackside4.png';


export default class VerusCard extends Component {
  render () {
    return (
      <div className='layout'>
          <img src={CardBackside} alt="CardBackside" className="CardBackside" />
          <div className='columnText'>
          <div className='countDownText'> VS</div>
          <div className='countDownText'> You win</div>
          </div>
          <img src={CardBackside} alt="CardBackside" className="CardBackside" />
      </div>
    )
  }
}
