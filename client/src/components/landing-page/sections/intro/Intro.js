import React from "react";
import styled from "styled-components";
import SectionHeading from "../../../shared/SectionHeading";
import TextParagraph from "./TextParagraph";
import HorizontalDivide from "../../../shared/HorizontalDivide";
import profilePhoto from "../../../../assets/images/svgs/profile-photo.png";
import CvDownload from "./CvDownload";

const Intro = () => {
  return (
    <IntroContainer id="intro">
      <HorizontalDivide width="100%" marginBot="40px" />
      <SectionHeading heading="intro" subheading="my background" />
      <TextParagraph imgSrc={profilePhoto} />
      <CvDownload />
    </IntroContainer>
  );
};

export default Intro;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: 80%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
