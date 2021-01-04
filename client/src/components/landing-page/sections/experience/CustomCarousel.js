import React from "react";
import { Carousel } from "react-bootstrap";
import { useWindowWidth } from "@react-hook/window-size";
import JobDescription from "./JobDescription";

const STEPS_CONTENT = [
  {
    title: "Edgescan",
    url: "https://www.edgescan.com",
    date: "Aug 2020 - present",
    description: [
      "Edgescan addresses the problem of system (in)security whilst keeping pace with rapid development and change. Using the latest technologies, Edgescan provides high class vulnerability management paired with expert manual validation for every vulnerability.",
    ],
    technologies: ["Rails", "React", "MySQL", "Material-UI", "Figma", "AWS"],
    highlights: [
      "Lead developer on major roadmap feature - custom order processing system visible both on user and admin front-ends, to increase order ease-of-use for admin staff, and reduce friction in customer onboarding. Required significant work gathering detailed requirements from stakeholders, vistual design (figma) and technical/ data-model design (miro), and planning throughout early phases of development. Significant communication skills demonstrated to deliver results satisfactory to a range of stakeholders with differing use-cases.",
    ],
  },
  {
    title: "Showoff.ie",
    url: "https://www.showoff.ie",
    date: "April 2019 - Aug 2020",
    description: [
      "Showoff offers clients a full software development service, from database design, middleware architectures, system architectures, API development, Admin Interface development, front end web development, native iOS and Android mobile development. Showoff works with clients to build a performant and scalable platform, ensuring the platform meets its required business needs.",
    ],
    technologies: ["Rails", "React", "PostgreSQL", "Bootstrap", "Heroku"],
    highlights: [
      "Headed front-end development on fintech platform - including complete planning and technical redesign of legacy platform front end. Coordinated with design team, QA and customer success to meet requirements within deadline. Handled project support thereafter.",
    ],
  },
];

const chooseHeight = (width) => {
  if (width < 400) {
    return "660px";
  } else if (width >= 400 && width < 500) {
    return "650px";
  } else if (width >= 500 && width < 600) {
    return "600px";
  } else if (width >= 600 && width < 700) {
    return "530px";
  } else if (width >= 700 && width < 800) {
    return "520px";
  } else if (width >= 800 && width < 900) {
    return "500px";
  } else if (width >= 900 && width < 1200) {
    return "500px";
  } else return "420px";
};

const CustomCarousel = ({ jobIndex }) => {
  const width = useWindowWidth();

  const renderJobs = () =>
    STEPS_CONTENT.map((job) => {
      return (
        <Carousel.Item style={{ height: chooseHeight(width) }}>
          <JobDescription job={job} />
        </Carousel.Item>
      );
    });

  return (
    <Carousel
      activeIndex={jobIndex}
      indicators={false}
      style={{
        width: "100%",
      }}
      touch={false}
      controls={false}
    >
      {renderJobs()}
    </Carousel>
  );
};

export default CustomCarousel;
