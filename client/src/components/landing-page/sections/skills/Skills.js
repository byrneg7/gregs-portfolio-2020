import React from "react";
import styled from "styled-components";
import SectionHeading from "../../../shared/SectionHeading";
import SkillsIcon from "./SkillsIcon";
import reactIcon from '../../../../assets/images/svgs/react.svg';
import rubyIcon from '../../../../assets/images/svgs/ruby.svg';
import nodeIcon from '../../../../assets/images/svgs/node.svg';
import awsIcon from '../../../../assets/images/svgs/aws.svg';
import postgresIcon from '../../../../assets/images/svgs/postgres.svg';
import mongodbIcon from '../../../../assets/images/svgs/mongodb.svg';
import { OUTLINE_GREY } from "../../../../assets/stylesheets/colors";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SectionHeading heading='skills' subheading='technologies and projects'/>
      <IconsContainer>
        <SkillsIcon src={reactIcon}  altText='react icon' height='200px' width='200px'/>
        <SkillsIcon src={nodeIcon}  altText='node icon' height='120px' width='120px'/>
        <SkillsIcon src={rubyIcon}  altText='ruby icon' height='120px' width='120px'/>
      </IconsContainer>
   </SkillsContainer>
  );
};

export default Skills;

const SkillsContainer = styled.div`
  margin-top: 100px;
`;

const IconsContainer = styled.div`
  margin-top: 50px;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;