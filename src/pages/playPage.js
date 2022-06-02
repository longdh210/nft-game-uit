import '../styles/playPage.css'
import CardBackSide from '../assets/CardBackside4.png'
import UserAvt from '../assets/user-avt.png'
import TempPcard from '../assets/TempPcard.png'
import TempRcard from '../assets/TempRcard.png'
import TempScard from '../assets/TempScard.png'
import SupportIcon from '../assets/supportIcon.png'
import video from '../assets/rotate1.mp4'
import '../styles/generalcss.css'
import TutorialDialog from '../components/tutorial'
import VerusCard from '../components/verusCard'
import CountDown from '../components/countDown'
import { useState, useEffect, useCallback } from 'react';
import '../styles/playPage.css';

import RandomItems from '../components/randomItems';

function Play () {
  const [buttonPopup,setButtonPopup]=useState(false);

  // const [firstCountDown, setFirstCountDown] = useState(5);
  const [countDown, setCountDown] = useState(5);
  const [render, setRender] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCountDown(countDown - 1);
    }, 1000);
    if(countDown == 0) {
      clearTimeout(timerId);
      // setCountDown(6);
      setRender(true);
      // setCountDown(0);
    }
    return () => clearTimeout(timerId);
  }, [countDown]);

  return (

    <div>
      <video
        autoPlay
        loop
        src={video}
        muted>
      </video>
      <div className='App'>
        <div className='playPage'>
          <div className='layoutFirst'>
            <div className='cornerCount'>
              Card left: 12
            </div>
            <div className='enemyCardList'>
              <img className='enemy-card' src={CardBackSide} alt='Card back side' />
              <img className='enemy-card' src={CardBackSide} alt='Card back side' />
              <img className='enemy-card' src={CardBackSide} alt='Card back side' />
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
        <div className="countDownText">
        {
          render == false ?
          <h1 style={{ fontSize: "50%" }}>ARE YOU READY ? <br />{countDown}</h1>
          : <h1 style={{ fontSize: "50%" }}>COUNTDOWN:<br />{countDown}<br/>PICK YOUR CARD</h1>
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
          {render ? <RandomItems countDown={countDown} onCountDownChange={setCountDown}></RandomItems> : <></>}
        </div>
        <div className='removePlace'>
          <div className='removeCard'>
            <span>Removed Card</span>
          </div>
          <div className='supportIcon'>
        <img
          className='icon'
          src={SupportIcon}
          alt='support icon'
          style={{ width: '3.5vw' }} 
          onClick={
            (e) => {
                 e.preventDefault();
                 console.log(1);
                 setButtonPopup(true);
              
            }
        }/>
      </div>
        </div>
       
     
      </div>
     
    </div>
    <TutorialDialog trigger={buttonPopup} setTrigger={setButtonPopup} >
        Testing
      </TutorialDialog>
        </div>
      </div>
     
  )
}

export default Play
