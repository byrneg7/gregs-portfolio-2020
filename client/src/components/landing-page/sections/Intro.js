import React from "react";
import styled from "styled-components";
import { OUTLINE_GREY } from "../../../assets/stylesheets/colors";
import SectionHeading from "../../shared/SectionHeading";

const Intro = () => {
  return (
    <IntroContainer id="intro">
      <SectionHeading heading='intro' subheading='my background'/>
    </IntroContainer>
  );
};

export default Intro;

const IntroContainer = styled.div`
  margin-top: 100px;
`;
