import React from "react";
import styled from "styled-components";
import { FONT_GREY_DARK } from "../../../../assets/stylesheets/colors";

const TextParagraph = ({ imgSrc }) => {
  return (
    <TextParagraphContainer>
      {imgSrc ? <InlineTextImg src={imgSrc} alt="profilePhoto" /> : null}
      <p>
        Full-stack web developer at Edgescan. Professional experience with
        ReactJS, NodeJS, Ruby on Rails, Figma. Experience delivering multiple
        full-stack mobile-first web applications based on customer requirements.
        Involved in all stages of the SDLC, from ideation to production.
        Interested in all aspects of web-development and experimenting with new
        technologies. Pursuing a part-time MSc. in Advanced Software Development
        on my weekends.
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
