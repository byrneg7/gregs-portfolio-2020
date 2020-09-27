import React from "react";
import styled from "styled-components";
import SectionHeading from "../../../shared/SectionHeading";
import TextParagraph from "./TextParagraph";
import HorizontalDivide from "../../../shared/HorizontalDivide";
import profilePhoto from "../../../../assets/images/svgs/profile-photo.png";

const Intro = () => {
  return (
    <IntroContainer id="intro">
      <SectionHeading heading="intro" subheading="my background" />
      <HorizontalDivide width="100%" />
      <TextParagraph imgSrc={profilePhoto} />
    </IntroContainer>
  );
};

export default Intro;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 60%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
