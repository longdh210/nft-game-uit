import '../styles/menuPage.css'
import Icon from '../assets/Icon.png'
import decorateCorner from '../assets/decorateCorner.png'
import botSVG from '../assets/bot.svg'
import rankSVG from '../assets/rank.svg'
import historySVG from '../assets/history.svg'
import profileSVG from '../assets/profile.svg'
import shoppingCartSVG from '../assets/shoppingCart1.svg'
import infoSVG from '../assets/info.svg'
import cardsSVG from '../assets/cards.svg'
import logo2 from '../assets/logo2.png'
import video from '../assets/rotate1.mp4'
import '../styles/generalcss.css';


function Menu () {
  return (
    <div>
       <video
        autoPlay
        loop
        src={video}
        muted>
      </video>
      <div className='App'>
            <div className='layout3'>
              <img src={Icon} alt='Icon' className='logoMain' />
              <div className='missionBox'>
                <h1 className='text'>Mission: Play with bot (0/10) -Reward 0.01 BTC Play with bot (0/20) - Reward 0.02 BTC</h1>
              </div>
              <div className='playZone'>
                <ul>
                  <li className='container'>
                    <img className='playzoneContainer' src={botSVG} alt='bot'></img>
                    <div className='playzoneText'>
                      Play with bots
                    </div>
                  </li>
                  <li className='container'>
                    <img className='playzoneContainer' src={rankSVG} alt='rank'></img>
                    <div className='playzoneText'>
                      Play ranked
                    </div>
                  </li>
                  <li className='container'>
                    <img className='playzoneContainer' src={historySVG} alt='history'></img>
                    <div className='playzoneText'>
                      Global rank
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='layout5'>
              <ul className='container2'>
                <h1 className='text'>BTC:~0.999</h1>
                <img className='smallContainer' src={shoppingCartSVG} alt='shoppingcart'></img>
                <img className='smallContainer' src={cardsSVG} alt='cards'></img>
                <img className='smallContainer' src={profileSVG} alt='profile'></img>
                <img className='smallContainer' src={infoSVG} alt='info'></img>
              </ul>
              <img src={logo2} className='menuLogo' alt='logo' />
              <div className='progressBarBox'>
                <div className='word'>
                  <div>
                    Current elo :3120
                  </div>
                  <div>
                    Next rank: 3200
                  </div>
                </div>
                <div className='progressBarContainer'>
                  <div className='progressBarLoad'></div>
                </div>
              </div>
            </div>
            <div className='wordCorner'>
              Your address: 0x80e7e19d5950121304a2a4D265582a05cF2099f3
            </div>
            <img src={decorateCorner} alt='corner' className='cornerMenuPage' />
          </div>
    </div>

  )
}
export default Menu
