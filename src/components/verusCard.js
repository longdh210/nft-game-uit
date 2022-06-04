import React, { Component } from "react";
import "../styles/verusCard.css";
import CardBackside from "../assets/CardBackside4.png";
import { imageToken } from "../parts/imageToken";

export const VerusCard = ({
    tokenUser = null,
    tokenComputer = null,
    result = "",
}) => {
    if (!tokenUser) {
        return null;
    }

    let userRarity = 0;

    if (tokenUser.rarity == 10 && tokenUser.name == "rock") {
        userRarity = 0;
    }

    if (tokenUser.rarity == 20 && tokenUser.name == "rock") {
        userRarity = 1;
    }

    if (tokenUser.rarity == 30 && tokenUser.name == "rock") {
        userRarity = 2;
    }

    if (tokenUser.rarity == 40 && tokenUser.name == "rock") {
        userRarity = 3;
    }

    if (tokenUser.rarity == 50 && tokenUser.name == "rock") {
        userRarity = 4;
    }

    if (tokenUser.rarity == 10 && tokenUser.name == "paper") {
        userRarity = 5;
    }

    if (tokenUser.rarity == 20 && tokenUser.name == "paper") {
        userRarity = 6;
    }

    if (tokenUser.rarity == 30 && tokenUser.name == "paper") {
        userRarity = 7;
    }

    if (tokenUser.rarity == 40 && tokenUser.name == "paper") {
        userRarity = 8;
    }

    if (tokenUser.rarity == 50 && tokenUser.name == "paper") {
        userRarity = 9;
    }

    if (tokenUser.rarity == 10 && tokenUser.name == "scissor") {
        userRarity = 10;
    }

    if (tokenUser.rarity == 20 && tokenUser.name == "scissor") {
        userRarity = 11;
    }

    if (tokenUser.rarity == 30 && tokenUser.name == "scissor") {
        userRarity = 12;
    }

    if (tokenUser.rarity == 40 && tokenUser.name == "scissor") {
        userRarity = 13;
    }

    if (tokenUser.rarity == 50 && tokenUser.name == "scissor") {
        userRarity = 14;
    }

    if (!tokenComputer) {
        return null;
    }

    let computerRarity = 0;

    if (tokenComputer.rarity == 10 && tokenComputer.name == "rock") {
        computerRarity = 0;
    }

    if (tokenComputer.rarity == 20 && tokenComputer.name == "rock") {
        computerRarity = 1;
    }

    if (tokenComputer.rarity == 30 && tokenComputer.name == "rock") {
        computerRarity = 2;
    }

    if (tokenComputer.rarity == 40 && tokenComputer.name == "rock") {
        computerRarity = 3;
    }

    if (tokenComputer.rarity == 50 && tokenComputer.name == "rock") {
        computerRarity = 4;
    }

    if (tokenComputer.rarity == 10 && tokenComputer.name == "paper") {
        computerRarity = 5;
    }

    if (tokenComputer.rarity == 20 && tokenComputer.name == "paper") {
        computerRarity = 6;
    }

    if (tokenComputer.rarity == 30 && tokenComputer.name == "paper") {
        computerRarity = 7;
    }

    if (tokenComputer.rarity == 40 && tokenComputer.name == "paper") {
        computerRarity = 8;
    }

    if (tokenComputer.rarity == 50 && tokenComputer.name == "paper") {
        computerRarity = 9;
    }

    if (tokenComputer.rarity == 10 && tokenComputer.name == "scissor") {
        computerRarity = 10;
    }

    if (tokenComputer.rarity == 20 && tokenComputer.name == "scissor") {
        computerRarity = 11;
    }

    if (tokenComputer.rarity == 30 && tokenComputer.name == "scissor") {
        computerRarity = 12;
    }

    if (tokenComputer.rarity == 40 && tokenComputer.name == "scissor") {
        computerRarity = 13;
    }

    if (tokenComputer.rarity == 50 && tokenComputer.name == "scissor") {
        computerRarity = 14;
    }

    return (
        <div className="layout">
            <img
                src={imageToken.it[userRarity]}
                alt="CardBackside"
                className="CardBackside"
            />
            <div className="columnText">
                <div className="countDownText"> VS</div>
                <div className="countDownText">{result}</div>
            </div>
            <img
                src={imageToken.it[computerRarity]}
                alt="CardBackside"
                className="CardBackside"
            />
        </div>
    );
};
