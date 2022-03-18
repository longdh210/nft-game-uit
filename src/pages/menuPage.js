import "../styles/menuPage.css"
import Icon from '../assets/Icon.png';
import Group9 from '../assets/Group9.png';
import Group13 from '../assets/Group13.png';

function Menu() {
    return (<div className="App">
        <div className="layout3">
            <img src={Icon} alt="Icon" className="logoMenuPage" />
            <div className="missionBox">Mission:
                Play with bot (0/10) -Reward 0.01 BTC
                Play with bot (0/20) -
                Reward 0.02 BTC
            </div>
        </div>
        <div className="layout4">
            <img src={Group9} alt="corner" className="corner2" />
        </div>
    </div>

    );




}
export default Menu