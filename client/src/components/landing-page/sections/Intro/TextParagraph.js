import React from "react";
import styled from "styled-components";
import { FONT_GREY_DARK } from "../../../../assets/stylesheets/colors";

const TextParagraph = ({ imgSrc }) => {
  return (
    <TextParagraphContainer>
      {imgSrc ? <InlineTextImg src={imgSrc} alt="profilePhoto" /> : null}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </TextParagraphContainer>
  );
};

export default TextParagraph;

const TextParagraphContainer = styled.div`
  animation: fadein 5s;
  margin-top: 20px;

  p {
    font-size: 26px;
    font-weight: 100;
    text-align: justify;
    color: ${FONT_GREY_DARK};
    margin-top: 0px;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const InlineTextImg = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 100px;
  box-shadow: 10px 10px 5px #ccc;
  float: left;
  margin-right: 35px;
`;
