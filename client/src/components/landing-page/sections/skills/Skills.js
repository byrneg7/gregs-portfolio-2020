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
      links: [
        {
          title: "Rails + React fullstack diary & blog app",
          repoSlug: "diary-app-rails-react",
        },
        {
          title:
            "Stream app - includes an api server to fetch a stream list, react/ redux front end, and rtmp server for streaming content",
          repoSlug: "stream-app",
        },
        {
          title: "MERN stack app for collectable card game",
          repoSlug: "lotus_mtg_mern",
        },
      ],
    },
  },
  {
    src: rubyIcon,
    alt: "Ruby Icon",
    height: "200px",
    width: "200px",
    text: {
      heading: "Ruby",
      links: [
        {
          title: "Rails + React fullstack diary & blog app",
          repoSlug: "diary-app-rails-react",
        },
        {
          title: "Rails authentication + diary API",
          repoSlug: "diary_api",
        },
      ],
    },
  },
  {
    src: nodeIcon,
    alt: "Node Icon",
    height: "200px",
    width: "200px",
    text: {
      heading: "NodeJS",
      links: [
        {
          title: "Rails + React fullstack diary & blog app",
          repoSlug: "diary-app-rails-react",
        },
        {
          title:
            "Node + React survey App. Includes Auth, Stripe and Sendgrid integration",
          repoSlug: "surveyApp",
        },
        {
          title: "Node, Socket.io & Mustache for real-time chat app",
          repoSlug: "node-chat-app",
        },
      ],
    },
  },
  {
    src: awsIcon,
    alt: "AWS Icon",
    height: "200px",
    width: "200px",
    text: {
      heading: "AWS",
      links: [],
    },
  },
  {
    src: postgresIcon,
    alt: "Postgres Icon",
    height: "200px",
    width: "200px",
    text: {
      heading: "PostgreSQL",
      links: [
        {
          title: "Knex + PostgreSQL DB",
          repoSlug: "express-postgres-diary-app",
        },
      ],
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
