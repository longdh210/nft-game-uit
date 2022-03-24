import "../styles/menuPage.css"
import Icon from '../assets/Icon.png';
import Group9 from '../assets/Group9.png';
import Group13 from '../assets/Group13.png';
import botSVG from '../assets/bot.svg';
import rankSVG from '../assets/rank.svg';
import historySVG from '../assets/history.svg';
function Menu() {
    return (<div className="App">
        <div className="layout3">
            <img src={Icon} alt="Icon" className="logoMenuPage" />
            <div className="missionBox">
                <h1 className="text">
                    Mission:
                    Play with bot (0/10) -Reward 0.01 BTC
                    Play with bot (0/20) -
                    Reward 0.02 BTC

                </h1>
            </div>
            <div className="playZone">
                <ul >
                    <li className="container">
                        <img src={botSVG} ></img>

                        <div className="verticalCenter" > Play with bots</div></li>
                    <li className="container"><img src={rankSVG} ></img> <div className="verticalCenter">Play ranked</div></li>
                    <li className="container"><img src={historySVG} ></img><div className="verticalCenter">Global rank</div></li>
                </ul>
            </div>


        </div>
        <div className="layout4">
            <img src={Group9} alt="corner" className="corner2" />
        </div>
    </div>

    );




}
export default Menu