import '../styles/playPage.css'
import CardBackSide from '../assets/CardBackside4.png'
import UserAvt from '../assets/user-avt.png'
import TempPcard from '../assets/TempPcard.png'
import TempRcard from '../assets/TempRcard.png'
import TempScard from '../assets/TempScard.png'
import SupportIcon from '../assets/supportIcon.png'
import video from '../assets/rotate1.mp4'
import '../styles/generalcss.css'

function Play () {
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
            COUNTDOWN:
            <div>
              15
            </div>
            PICK YOUR CARD
          </div>
          <div className='layoutThird'>
            <div className='user-card-2'>
              <div className='user-info'>
                <img className='avt' src={UserAvt} alt='user-avt' /> Player B
              </div>
              <div className='user-hp'>
                HP: 5/5
              </div>
            </div>
            <div className='userCardList'>
              <img className='card' src={TempPcard} alt='Paper card' />
              <img className='card' src={TempRcard} alt='Rock card' />
              <img className='card' src={TempScard} alt='Scissor card' />
            </div>
            <div className='removePlace'>
              <div className='removeCard'>
                <span>Removed Card</span>
              </div>
              <img className='supportIcon' src={SupportIcon} alt='support icon' />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Play
