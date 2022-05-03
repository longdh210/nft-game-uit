import "../styles/playPage.css";
import CardBackSide from "../assets/CardBackside4.png";
import UserAvt from "../assets/user-avt.png";
import TempPcard from "../assets/TempPcard.png";
import TempRcard from "../assets/TempRcard.png";
import TempScard from "../assets/TempScard.png";
import SupportIcon from "../assets/supportIcon.png";

function Play() {
    return (
        <div className="playPage">
            <div className="layoutFirst">
                <div className="cornerPlayPage">
                    <h2 className="cornerCount">Card left: 12</h2>
                </div>
                <div className="cardListPlayPage">
                    <img className="card" src={CardBackSide} alt="Card back side" />
                    <img className="card" src={CardBackSide} alt="Card back side" />
                    <img className="card" src={CardBackSide} alt="Card back side" />
                </div>
                <div className="user-card">
                    <div className="user-info">
                        <img className="avt" src={UserAvt} alt="user-avt" />
                        Player B
                    </div>
                    <div className="user-hp">HP: 5/5</div>
                </div>
            </div>
            <div className="layoutSecond">
            </div>
            <div className="layoutThird">
                <div className="user-card-2">
                    <div className="user-info">
                        <img className="avt" src={UserAvt} alt="user-avt" />
                        Player B
                    </div>
                    <div className="user-hp">HP: 5/5</div>
                </div>
                <div className="cardListPlayPage-2">
                    <img className="card" src={TempPcard} alt="Paper card" />
                    <img className="card" src={TempRcard} alt="Rock card" />
                    <img className="card" src={TempScard} alt="Scissor card" />
                </div>
                <div className="right-side">
                    <div className="removed-card">
                        <h1 style={{
                            margin: "auto",
                            fontSize: "20px",
                            color: "white",
                            textAlign: "center",
                            justifyContent: "center",
                            verticalAlign: "middle",
                        }}>
                            Removed Card
                        </h1>
                    </div>
                    <div className="support-icon">
                        <img 
                            className="icon" 
                            src={SupportIcon} 
                            alt="support icon"
                            style={{width: "45px"}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Play;