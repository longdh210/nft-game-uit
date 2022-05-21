import { useState, useEffect } from 'react';
import '../styles/playPage.css';
import CardBackSide from '../assets/CardBackside4.png';
import UserAvt from '../assets/user-avt.png';
import SupportIcon from '../assets/supportIcon.png';
import RandomItems from '../components/randomItems';

function Play() {
  const [countDown, setCountDown] = useState(15)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCountDown(countDown - 1);
    }, 1000);
    if(countDown == 0) {
      clearTimeout(timerId);
    }
  }, [countDown]);

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
        {
          countDown > 0?
          <h1 style={{ fontSize: "50%" }}>COUNTDOWN: <br />{countDown}<br />PICK YOUR CARD</h1>
          :<></>
        }
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
          <RandomItems></RandomItems>
        </div>
        <div className='removePlace' onclick="event.stopPropagation(); alert('you clicked inside the header');">
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
