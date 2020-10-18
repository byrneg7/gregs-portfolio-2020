import React from "react";
import styled from "styled-components";

import TypeWriter from "../shared/TypeWriter";
import Intro from "./sections/intro/Intro";
import Skills from "./sections/skills/Skills";
import Contact from "./sections/contact/Contact";
import HorizontalDivide from "../shared/HorizontalDivide";
import Experience from "./sections/experience/Experience";

const LandingPage = () => {
  const typeWriterHeading = <h1>Hello world.</h1>;
  const typeWriterSubeading = <h2>Greg Byrne. Web developer.</h2>;

  return (
    <div>
      <HeadingContainer>
        <Header>
          <TypeWriter content={typeWriterHeading} makeStaticDelay={1500} />
          <TypeWriter content={typeWriterSubeading} renderDelay={1500} />
        </Header>
      </HeadingContainer>
      <HorizontalDivide />
      <SectionsContainer>
        <Intro />
        <Experience />
        <Skills />
        <Contact />
      </SectionsContainer>
    </div>
  );
};

export default LandingPage;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 50px;
  min-height: 150px;
  @media (max-width: 768px) {
    margin-top: 50px;
    min-height: 80px;
  }
`;

const Header = styled.div`
  max-width: 800px;
`;

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
