import React from "react";
import styled from "styled-components";
import { OUTLINE_GREY } from "../../../../assets/stylesheets/colors";
import SkillsIconRepoList from "./SkillsIconRepoList";

const SkillsIcon = ({
  src,
  altText,
  height,
  width,
  text: { heading, links },
}) => {
  console.log(heading, links);
  return (
    <SkillsIconContainer>
      <FlipCard className="flip-card">
        <FlipCardInner className="flip-card-inner">
          <FlipCardFront className="flip-card-front">
            <img
              src={src}
              alt={altText}
              style={{ width: width, height: height }}
            />
          </FlipCardFront>
          <FlipCardBack className="flip-card-back">
            <h1>{heading}</h1>
            <SkillsIconRepoList repos={links} />
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>
    </SkillsIconContainer>
  );
};

const FlipCardSide = styled.div`
  position: absolute;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  box-shadow: 3px 3px 5px 6px #ccc;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;

const FlipCardFront = styled(FlipCardSide)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $OUTLINE_LIGHT_GREY;
  color: black;
`;

const FlipCardBack = styled(FlipCardSide)`
  background-color: ${OUTLINE_GREY};
  transform: rotateY(180deg);
  }
}`;

const SkillsIconContainer = styled.div`
  display: flex;
  margin: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const FlipCard = styled.div`
  min-height: 250px;
  min-width: 250px;
  height: 250px;
  width: 250px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 20px;
`;

export default SkillsIcon;
