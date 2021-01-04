import React from "react";
import styled from "styled-components";
import { FONT_GREY } from "../../assets/stylesheets/colors";

const SectionHeading = ({ heading, subheading }) => {
  return (
    <Centered>
      <SectionHeadingContainer>
        <h1>{heading}</h1>

        <h2>{subheading}</h2>
      </SectionHeadingContainer>
    </Centered>
  );
};

export default SectionHeading;

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

const SectionHeadingContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  animation: fadein 5s;
  margin-bottom: 50px;
  text-transform: lowercase;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  h1 {
    font-size: 48px;
    margin: 0;
    align-self: center;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  h2 {
    font-size: 18px;
    color: ${FONT_GREY};
    margin: 0;
    align-self: center;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
