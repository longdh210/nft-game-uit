import { imageToken } from "../parts/imageToken";

const tokenRenderer = ({ token = null, size = 200, style }) => {
    if(!token) {
        return null;
    }

    let dnaStr = String(hero.dna);

    while(dnaStr.length < 16) dnaStr = "0" + dnaStr;

    let tokenDetails = {
        it: dnaStr.substring(0, 14) % 5,
        id: token.id,
    }

    const tokenStyle = {
        width: "100%",
        height: "100%",
        position: "absolute",
    }

    return (
        <div 
            style={{
                minWidth: size,
                mintHeight: size,
                background: "blue",
                position: "relative",
                ...style,
            }}
        >
            <img alt={"token image"} src={imageToken.it[heroDetails]} style={tokenStyle}/>
        </div>
    )
}