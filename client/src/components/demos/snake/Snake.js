import React from "react";
import styled from "styled-components";
import DemoHeading from "../DemoHeading";
import SnakeGame from "./SnakeGame";

const Snake = () => {
  return (
    <SnakeContainer>
      <DemoHeading text="Snake" />
      <SnakeGame />
    </SnakeContainer>
  );
};

export default Snake;

const SnakeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
