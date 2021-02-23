import React from "react";
import styled from "styled-components";

const DemoHeading = ({ text }) => {
  return <Heading>{text}</Heading>;
};

export default DemoHeading;

const Heading = styled.h1`
  font-size: 28px;
`;
