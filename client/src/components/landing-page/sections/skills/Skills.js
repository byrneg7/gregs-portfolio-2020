import React from "react";
import styled from "styled-components";
import uniqid from "uniqid";
import SectionHeading from "../../../shared/SectionHeading";
import SkillsIcon from "./SkillsIcon";
import reactIcon from "../../../../assets/images/svgs/react.svg";
import rubyIcon from "../../../../assets/images/svgs/ruby.svg";
import nodeIcon from "../../../../assets/images/svgs/node.svg";
import awsIcon from "../../../../assets/images/svgs/aws.svg";
import postgresIcon from "../../../../assets/images/svgs/postgres.svg";
import railsIcon from "../../../../assets/images/svgs/rails.svg";

const SKILLS_LIST = [
  {
    src: reactIcon,
    alt: "React Icon",
    height: "200px",
    width: "200px",
    text: { heading: "test 1", body: "test 1" },
  },
  {
    src: rubyIcon,
    alt: "Ruby Icon",
    height: "200px",
    width: "200px",
    text: { heading: "test 2", body: "test 2" },
  },
  {
    src: nodeIcon,
    alt: "Node Icon",
    height: "200px",
    width: "200px",
    text: { heading: "test 3", body: "test 3" },
  },
  {
    src: railsIcon,
    alt: "Rails Icon",
    height: "200px",
    width: "200px",
    text: { heading: "test 4", body: "test 4" },
  },
  {
    src: awsIcon,
    alt: "AWS Icon",
    height: "200px",
    width: "200px",
    text: { heading: "test 5", body: "test 5" },
  },
  {
    src: postgresIcon,
    alt: "Postgres Icon",
    height: "200px",
    width: "200px",
    text: { heading: "test 6", body: "test 6" },
  },
];

const Skills = () => {
  const renderSkillsTiles = () =>
    SKILLS_LIST.map(({ src, alt, height, width, text }) => (
      <SkillsIcon
        key={uniqid()}
        src={src}
        altText={alt}
        height={height}
        width={width}
        text={text}
      />
    ));

  return (
    <SkillsContainer id="skills">
      <SectionHeading heading="skills" subheading="technologies and projects" />
      <IconsContainer>{renderSkillsTiles()}</IconsContainer>
    </SkillsContainer>
  );
};

export default Skills;

const SkillsContainer = styled.div`
  align-self: center;
  justify-self: center;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
