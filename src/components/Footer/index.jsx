import React from "react";
import "./Footer.module.css";

function Footer({ resetGame }) {
    return (
        <div className="footer-container">
            <button className="footer-text" onClick={resetGame}>Reiniciar jogo</button>
        </div>
    );
};

export default Footer; 


            