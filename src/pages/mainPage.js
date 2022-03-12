import '../CSS/mainPage.css';
import '../CSS/generalcss.css';
import Group9 from '../assets/Group9.png';
import Group13 from '../assets/Group13.png';
import Icon from '../assets/Icon.png';
import CardBackside from '../assets/CardBackside4.png';
import TempPcard from '../assets/TempPcard.png';
import TempRcard from '../assets/TempRcard.png';
import TempScard from '../assets/TempScard.png';

function Login() {
    return (
        <div className="App">
            <div className="layout1">
                <img src={Group9} alt="corner" className="corner1" />
                <div>
                    <img src={Group13} alt="Group 13" className="mainLogo" />
                </div>
                <ul className="cardList">
                    <li className="cardBehind">
                        <img src={CardBackside} alt="CardBackside" className="CardBackside" />
                    </li>
                    <li>
                        <img src={TempScard} alt="TempScard" className="TempScard" />
                    </li>
                    <li>
                        <img src={TempPcard} alt="TempPcard" className="TempPcard" />
                    </li>
                    <li>
                        <img src={TempRcard} alt="TempRcard" className="TempRcard" />
                    </li>
                </ul>
            </div>
            <div className="layout2">
                <img src={Icon} alt="Icon" className="logo" />
                <h1 className="header1">NFT Rock Paper Sisscor</h1>
                <h1 className="header2">Play Now</h1>
                <img src={Group9} alt="corner" className="corner2" />
            </div>
        </div>
    );
}

export default Login;