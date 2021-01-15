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
import HorizontalDivide from "../../../shared/HorizontalDivide";

const SKILLS_LIST = [
  {
    src: reactIcon,
    alt: "React Icon",
    height: "200px",
    width: "200px",
    text: {
      heading: "ReactJS",
      body: "test 1",
      repoSlug: "diary-app-rails-react",
    },
  },
  {
    src: rubyIcon,
    alt: "Ruby Icon",
    height: "200px",
    width: "200px",
    text: {
      heading: "Ruby",
      body: "Rails + React fullstack diary & blog app",
      repoSlug: "diary-app-rails-react",
    },
  },
  {
    src: nodeIcon,
    alt: "Node Icon",
    height: "200px",
    width: "200px",
    text: {
      heading: "NodeJS",
      body: "test 3",
      repoSlug: "diary-app-rails-react",
    },
  },
  {
    src: railsIcon,
    alt: "Rails Icon",
    height: "200px",
    width: "200px",
    text: {
      heading: "Ruby on Rails",
      body: "test 4",
      repoSlug: "diary-app-rails-react",
    },
  },
  {
    src: awsIcon,
    alt: "AWS Icon",
    height: "200px",
    width: "200px",
    text: { heading: "AWS", body: "test 5", repoSlug: "diary-app-rails-react" },
  },
  {
    src: postgresIcon,
    alt: "Postgres Icon",
    height: "200px",
    width: "200px",
    text: {
      heading: "PostgreSQL",
      body: "test 6",
      repoSlug: "diary-app-rails-react",
    },
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
      <HorizontalDivide />
      <SectionHeading heading="Skills" subheading="Technologies and projects" />
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
