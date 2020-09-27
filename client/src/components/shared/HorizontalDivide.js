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

  @media (max-width: 768px) {
    width: 90vw;
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