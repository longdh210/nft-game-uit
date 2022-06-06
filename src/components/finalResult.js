import IconBack from "../assets/iconBack.png";
import { useNavigate } from "react-router-dom";

function FinalResult({ userWinCount = 0, computerWinCount = 0, result = "" }) {
    const navigate = useNavigate();

    return (
        <div className="countDownText">
            <h1 className="columnText" style={{ fontSize: "50%" }}>
                Final Score
            </h1>
            <h1 style={{ fontSize: "50%" }}>
                {userWinCount}:{computerWinCount}
            </h1>
            <h1 style={{ fontSize: "50%" }}>{result}</h1>
            <div
                className="container"
                onClick={() => {
                    navigate("/menu");
                }}
            >
                <img
                    className="playzoneContainer"
                    src={IconBack}
                    alt="bot"
                    style={{ height: "70%" }}
                ></img>
                <div className="playzoneText">Back to menu</div>
            </div>
        </div>
    );
}

export default FinalResult;
