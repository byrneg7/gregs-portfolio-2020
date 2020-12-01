import React from "react";
import styled from "styled-components";
import HorizontalDivide from "../../../shared/HorizontalDivide";
import SectionHeading from "../../../shared/SectionHeading";
import ExperienceNav from "./ExperienceNav";

const Experience = () => {
  return (
    <SkillsContainer id="skills">
      <HorizontalDivide />
      <SectionHeading
        heading="Experience"
        subheading="Professional background"
      />
      <ExperienceNav/>
    </SkillsContainer>
  );
};

export default Experience;

const SkillsContainer = styled.div`
  align-self: center;
  justify-self: center;
`;
