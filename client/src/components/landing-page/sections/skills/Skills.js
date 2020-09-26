import React from "react";
import styled from "styled-components";
import SectionHeading from "../../../shared/SectionHeading";
import SkillsIcon from "./SkillsIcon";
import reactIcon from "../../../../assets/images/svgs/react.svg";
import rubyIcon from "../../../../assets/images/svgs/ruby.svg";
import nodeIcon from "../../../../assets/images/svgs/node.svg";
import awsIcon from "../../../../assets/images/svgs/aws.svg";
import postgresIcon from "../../../../assets/images/svgs/postgres.svg";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SectionHeading heading="skills" subheading="technologies and projects" />
      <IconsContainer>
        <SkillsIcon
          src={reactIcon}
          altText="react icon"
          height="200px"
          width="200px"
          text={{
            heading: "heading 1",
            body: "body 1",
          }}
        />
        <SkillsIcon
          src={nodeIcon}
          altText="node icon"
          height="120px"
          width="120px"
          text={{
            heading: "heading 2",
            body: "body 2",
          }}
        />
        <SkillsIcon
          src={rubyIcon}
          altText="ruby icon"
          height="120px"
          width="120px"
          text={{
            heading: "heading 3",
            body: "body 3",
          }}
        />
        <SkillsIcon
          src={awsIcon}
          altText="ruby icon"
          height="120px"
          width="120px"
          text={{
            heading: "heading 4",
            body: "body 4",
          }}
        />
        <SkillsIcon
          src={postgresIcon}
          altText="ruby icon"
          height="120px"
          width="120px"
          text={{
            heading: "heading 5",
            body: "body 5",
          }}
        />
      </IconsContainer>
    </SkillsContainer>
  );
};

export default Skills;

const SkillsContainer = styled.div`
  margin-top: 100px;
  align-self: center;
  justify-self: center;
`;

const IconsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
