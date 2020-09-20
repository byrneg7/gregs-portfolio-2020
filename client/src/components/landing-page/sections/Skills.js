import React from "react";
import styled from "styled-components";
import SectionHeading from "../../shared/SectionHeading";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SectionHeading heading='skills' subheading='technologies and projects'/>
   </SkillsContainer>
  );
};

export default Skills;

const SkillsContainer = styled.div`
  margin-top: 100px;
  background-color: white;
`;
