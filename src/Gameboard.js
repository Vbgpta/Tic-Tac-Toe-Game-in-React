import React, { useState }from "react";
import "./Gameboard.css";

const calculateWinner = (sqaures)=> {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for(const [a,b,c] of lines) {
        if(
            squares[a] &&
            squares[a] === squares[b] &&
            sqaures[a] === squares[c]
        ) {
            return sqaures[a];
        }
    }

    return null;
};

const Square = ({ value, onClick }) => (
    <button className="square" onClick={onClick}>
        {value}
    </button>
);

function GameBoard() {
    const [square, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i)=>{
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        const newSquares = [...squares];
        newSquares[i] = IsNext ? "X" : "O";
    }
}