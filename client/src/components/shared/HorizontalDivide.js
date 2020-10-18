import React from "react";
import styled from "styled-components";
import { OUTLINE_GREY } from "../../assets/stylesheets/colors";

const HorizontalDivide = ({ width }) => {
  return <StyledHr width={width} />;
};

export default HorizontalDivide;

const StyledHr = styled.hr`
  border: 1px solid ${OUTLINE_GREY};
  width: ${({ width }) => width || "75vw"};
  margin-top: 60px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    width: 90%;
  }
  animation: fadein 5s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
