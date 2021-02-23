import React, { useEffect, useState } from "react";
import styled from "styled-components";
import uniqId from "uniqid";

const BOARD = [];

const initBoard = () => {
  for (let i = 0; i < 20; i++) {
    BOARD.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }
};

initBoard();

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const getRandomCoord = () => {
  const randX = getRandomInt(BOARD[0].length);
  const randY = getRandomInt(BOARD[0].length);
  return { x: randX, y: randY };
};

const SnakeGame = () => {
  const { x, y } = getRandomCoord();
  const [board, setBoard] = useState(BOARD);

  const [headPosition, setHeadPosition] = useState({ x, y });
  const [placedBlocks, setPlacedBlocks] = useState([{ x, y }]);

  useEffect(() => {
    const { x, y } = headPosition;
    const newBoard = [...BOARD];
    newBoard[x][y] = 1;
    setBoard(newBoard);
  }, []);

  useEffect(() => {
    const { x, y } = headPosition;
    const newBoard = [...BOARD];
    newBoard[x][y] = 1;
    setBoard(newBoard);
  }, [headPosition]);

  const removeOldestSnakeBlock = (position) => {
    const earliestCoords = placedBlocks[0];

    //  remove block at this pos
    const { x, y } = earliestCoords;
    const newBoard = [...board];
    newBoard[x][y] = 0;
    setBoard(newBoard);

    setPlacedBlocks([position]);
  };

  const move = (direction) => {
    switch (direction) {
      case "up":
        removeOldestSnakeBlock({ ...headPosition, y: headPosition.y - 1 });
        setHeadPosition({ ...headPosition, y: headPosition.y - 1 });
        break;
      case "down":
        removeOldestSnakeBlock({ ...headPosition, y: headPosition.y + 1 });
        setHeadPosition({ ...headPosition, y: headPosition.y + 1 });
        break;
      case "left":
        removeOldestSnakeBlock({ ...headPosition, x: headPosition.x - 1 });
        setHeadPosition({ ...headPosition, x: headPosition.x - 1 });
        break;
      case "right":
        removeOldestSnakeBlock({ ...headPosition, x: headPosition.x + 1 });
        setHeadPosition({ ...headPosition, x: headPosition.x + 1 });
        break;
      default:
        return;
    }
  };

  const renderBoard = (boardCoords) => {
    return boardCoords.map((colCoords) => renderCol(colCoords));
  };

  const renderCol = (colCoords) => {
    return colCoords.map((currentValue) => renderBox(currentValue));
  };

  const renderBox = (value) => {
    return <Box key={uniqId()} currentValue={value} />;
  };

  return (
    <div>
      <h1>{headPosition.x}</h1>
      <h1>{headPosition.y}</h1>
      <button onClick={() => console.log(placedBlocks)}>placed blocks</button>
      <button onClick={() => console.log(board)}>current coords</button>
      <button onClick={() => console.log(headPosition)}>
        current headposition
      </button>
      <button onClick={() => move("up")}>up</button>
      <button onClick={() => move("down")}>down</button>
      <button onClick={() => move("left")}>left</button>
      <button onClick={() => move("right")}>right</button>
      <GameBox>{renderBoard(board)}</GameBox>
    </div>
  );
};

export default SnakeGame;

const Box = ({ currentValue }) => {
  return <BoxDiv key={uniqId()} color={handleColor(currentValue)} />;
};

const GameBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: stretch;
  width: 400px;
  height: 400px;
  background-color: grey;
`;

const handleColor = (val) => {
  return val === 1 ? "green" : "red";
};

const BoxDiv = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${({ color }) => color};
`;
