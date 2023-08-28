import React from "react";
import "./Player.module.css";

function Player({ message }) {
    return (
        <h1 className="player-text">{message}</h1>
    );
}

export default Player;


