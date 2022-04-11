import "../styles/playPage.css";
import CardBackSide from "../assets/CardBackside4.png";

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
                    <div className="user-info"> <icon></icon> Player B</div>
                    <div className="user-hp">HP</div>
                </div>
            </div>
            <div className="layoutSecond">
                <h1>Long</h1>
            </div>
            <div className="layoutThird">
                <h1>Duong</h1>
            </div>
        </div>
    )
}

export default Play;