import React from "react";
import  "./EndBoard.module.css"

function EndBoard({ winner }) {

    if (winner === "X") {
        return (
            <div className="combined-endBoard">
                <div className="image-endBoard">
                    <img src="/X.svg" alt="X" />
                </div>
                <div className="text-endBoard">
                    <h1>Winner!</h1>
                </div>
            </div>
        );
    } else if (winner === "O") {
        return (
            <div className="combined-endBoard">
                <div className="image-endBoard">
                    <img src="/O.svg" alt="O" />
                </div>
                <div className="text-endBoard">
                    <h1>Winner!</h1>
                </div>
            </div>
        );
    } else if (winner === "Draw") {
        return (
            <div className="combined-endBoard">
                <div className="image-endBoard">
                    <img src="/X.svg" alt="X" />
                    <img src="/O.svg" alt="O" />
                </div>
                <div className="text-endBoard">
                    <h1>Draw!</h1>
                </div>
            </div>
        );
        } else {
            return null;
        }
}

export default EndBoard;


