import React from "react";
import "./Score.module.css";

function Score({ image, score, isActive, isWinner }) {
    const scoreClasses = isActive || isWinner ? "button-score active" : "button-score";

    return (
        <button className={scoreClasses}>
            <img className="image-score" src={image} alt="Score" />
            <span className="score-text">{score !== null ? score : "-"}</span>
        </button>
    )
}

export default Score;
