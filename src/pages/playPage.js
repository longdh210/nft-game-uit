import { useState, useEffect } from 'react';
import '../styles/playPage.css';
import CardBackSide from '../assets/CardBackside4.png';
import UserAvt from '../assets/user-avt.png';
import TempPcard from '../assets/TempPcard.png';
import TempRcard from '../assets/TempRcard.png';
import TempScard from '../assets/TempScard.png';
import SupportIcon from '../assets/supportIcon.png';
import { TokenRenderer } from '../components/tokenRenderer';
import getItems from '../test';
import { game, getUserChoice } from '../components/logicGame.js';
import { rockItems, paperItems, scissorItems } from '../parts/items.js';


function Play() {
  // const [countDown, setCountDown] = useState(15)

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setCountDown(countDown - 1);
  //   }, 1000);
  //   if(countDown == 0) {
  //     clearTimeout(timerId);
  //   }
  // }, [countDown]);

  const handleClickItem = (item) => {
    game(item);
  }

  return (
    <div className='playPage'>
      <div className='layoutFirst'>
        <div className='cornerCount'>
          Card left: 12
        </div>
        <div className='enemyCardList'>
          <img className='card' src={CardBackSide} alt='Card back side' />
          <img className='card' src={CardBackSide} alt='Card back side' />
          <img className='card' src={CardBackSide} alt='Card back side' />
        </div>
        <div className='user-card'>
          <div className='user-info'>
            <img className='avt' src={UserAvt} alt='user-avt' /> Player B
          </div>
          <div className='user-hp'>
            HP: 5/5
          </div>
        </div>
      </div>
      <div className='layoutSecond'>
        <div className="countDown">
        {/* {
          countDown > 0? */}
          <h1 style={{ fontSize: "50%" }}>COUNTDOWN: <br />{15}<br />PICK YOUR CARD</h1>
          {/* :<></>
        } */}
        </div>
      </div>
      <div className='layoutThird'>
        <div className='user-card-2' >
          <div className='user-info'>
            <img className='avt' src={UserAvt} alt='user-avt' /> Player B
          </div>
          <div className='user-hp'>
            HP: 5/5
          </div>
        </div>
        <div className='userCardList'>
          {
            getUserChoice(rockItems, paperItems, scissorItems).map((item, index) => (
                <TokenRenderer token={item} key={index} onClick={() => handleClickItem(item)}></TokenRenderer>
            ))
          }
        </div>
        <div className='removePlace'>
          <div className='removeCard'>
            <span>Removed Card</span>
          </div>
        </div>
      </div>
      <div className='supportIcon'>
        <img
          className='icon'
          src={SupportIcon}
          alt='support icon'
          style={{ width: '45px' }} />
      </div>
    </div>

  )
}

export default Play
