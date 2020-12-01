import React from "react";
import styled from "styled-components";
import { FONT_GREY_DARK } from "../../../../assets/stylesheets/colors";

const TextParagraph = ({ imgSrc }) => {
  return (
    <TextParagraphContainer>
      {imgSrc ? <InlineTextImg src={imgSrc} alt="profilePhoto" /> : null}
      <p>
        Full-stack web developer. Professional experience with ReactJS, NodeJS,
        Ruby on Rails, Figma. Interested in all stages of the SDLC, from
        ideation to production. Enjoy all aspects of web-development and
        experimenting with new technologies. Pursuing a part-time MSc. in
        Advanced Software Development on my weekends.
      </p>
    </TextParagraphContainer>
  );
};

export default TextParagraph;

const TextParagraphContainer = styled.div`
  animation: fadein 5s;

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
  height: 150px;
  width: 150px;
  margin-top: -20px;
  margin-left: -20px;
  margin-right: 20px;
  float: left;
`;
