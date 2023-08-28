import React from "react";
import { useState, useEffect } from "react";
import "./Game.module.css";
import Player from "../Player";
import {calculateWinner} from "../calculateWinner";
import Footer from "../Footer";
import Score from "../Score";
import EndBoard from "../EndBoard";

function Tabuleiro({ valor, onSquareClick }) {
    return (
        <button className="quadrado" onClick={onSquareClick}>
             {valor === "X" ? <img src="/X.svg" alt="X" /> : valor === "O" ? <img src="/O.svg" alt="O" /> : null}
        </button>
    )
};

function Game(props) {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [playerXScore, setPlayerXScore] = useState(null);
    const [playerOScore, setPlayerOScore] = useState(null);
    const [playerMessage, setPlayerMessage] = useState("Começar o jogo ou selecionar jogador");
    const [winner, setWinner] = useState(null);

    const handleGameEnd = (result) => {
      setWinner(result);
    };

    function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
        return;
    }

  const nextSquares = squares.slice();

  if (xIsNext) {
    nextSquares[i] = "X";
  } else {
    nextSquares[i] = "O";
  }

  setSquares(nextSquares);

  const winner = calculateWinner(nextSquares);

  if (winner) {
    if (winner === "X") {
      setPlayerXScore(playerXScore + 1);
      setXIsNext(false);
    } else if (winner === "O") {
      setPlayerOScore(playerOScore + 1);
      setXIsNext(true);
    }

    setPlayerMessage("Fim de jogo");
    setWinner(winner);
  } else if (nextSquares.every(square => square !== null)) {
    setPlayerMessage("Fim de jogo");
    handleGameEnd("Draw");
  } else {
    setPlayerMessage(`Vez de ${xIsNext ? "O" : "X"}`);
    setXIsNext(!xIsNext);
  }

}

    function resetGame() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        setPlayerMessage("Começar o jogo ou selecionar jogador");
        setWinner(null);

        if (winner === "X") {
          setXIsNext(true);
      } else if (winner === "O") {
          setXIsNext(false);
      }
    }

    return (
        <div className="game-container">
            <div className="score-container">
                <Score image="/X.svg" score={playerXScore} isActive={xIsNext && !winner} isWinner={winner === "X"} />
                <Score image="/OBlack.svg" score={playerOScore} isActive={!xIsNext && !winner} isWinner={winner === "O"} />
            </div>
            <Player message={playerMessage} />
            {!winner && (
            <div className="game-tabuleiro">
                <div className="linha-tabuleiro">
                    <Tabuleiro valor={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Tabuleiro valor={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Tabuleiro valor={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className="linha-tabuleiro">
                    <Tabuleiro valor={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Tabuleiro valor={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Tabuleiro valor={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className="linha-tabuleiro">
                    <Tabuleiro valor={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Tabuleiro valor={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Tabuleiro valor={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>
            )}
            {winner && ( 
                <EndBoard winner={winner} />
            )}
            <Footer resetGame={resetGame} />
        </div>
    );
};

export default Game; 