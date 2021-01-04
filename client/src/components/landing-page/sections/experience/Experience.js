import React from "react";
import styled from "styled-components";
import HorizontalDivide from "../../../shared/HorizontalDivide";
import SectionHeading from "../../../shared/SectionHeading";
import ExperienceNav from "./ExperienceNav";

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <HorizontalDivide />
      <SectionHeading
        heading="Experience"
        subheading="Professional background"
      />
      <ExperienceNav />
    </ExperienceContainer>
  );
};

export default Experience;

const ExperienceContainer = styled.div`
  align-self: center;
  justify-self: center;
  max-width: 70%;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;
