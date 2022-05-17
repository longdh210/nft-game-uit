import { imageToken } from "../parts/imageToken";

export const TokenRenderer = ({ token = null, size = 200, className = 'card', onClick}) => {
    if(!token) {
        return null;
    }

    let rarity = 0;

    if(token.rarity == 10 && token.name == 'rock') {
        rarity = 0;
    }

    if(token.rarity == 20 && token.name == 'rock') {
        rarity = 1;
    }

    if(token.rarity == 30 && token.name == 'rock') {
        rarity = 2;
    }

    if(token.rarity == 40 && token.name == 'rock') {
        rarity = 3;
    }

    if(token.rarity == 50 && token.name == 'rock') {
        rarity = 4;
    }

    if(token.rarity == 10 && token.name == 'paper') {
        rarity = 5;
    }

    if(token.rarity == 20 && token.name == 'paper') {
        rarity = 6;
    }

    if(token.rarity == 30 && token.name == 'paper') {
        rarity = 7;
    }

    if(token.rarity == 40 && token.name == 'paper') {
        rarity = 8;
    }

    if(token.rarity == 50 && token.name == 'paper') {
        rarity = 9;
    }

    if(token.rarity == 10 && token.name == 'scissor') {
        rarity = 10;
    }

    if(token.rarity == 20 && token.name == 'scissor') {
        rarity = 11;
    }

    if(token.rarity == 30 && token.name == 'scissor') {
        rarity = 12;
    }

    if(token.rarity == 40 && token.name == 'scissor') {
        rarity = 13;
    }

    if(token.rarity == 50 && token.name == 'scissor') {
        rarity = 14;
    }

    const tokenStyle = {
        width: "100%",
        height: "100%",
        position: "absolute",
    }

    return (
        // <div 
            // style={{
            //     minWidth: size,
            //     mintHeight: size,
            //     background: "blue",
            //     position: "relative",
            //     ...style,
            // }}
        // >
            <img className={className} alt={"token image"} src={imageToken.it[rarity]} onClick={onClick} />
        // </div>
    )
}