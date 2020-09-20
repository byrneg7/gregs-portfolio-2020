import React from "react";
import styled from "styled-components";

import TypeWriter from "../shared/TypeWriter";
import Intro from "./sections/Intro";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Navbar from "./navbar/Navbar";

const LandingPage = () => {
  const typeWriterHeading = <h1>Hello world.</h1>;
  const typeWriterSubeading = <h2>Greg Byrne. Web developer.</h2>;

  return (
    <div>
      <HeadingContainer>
        <TypeWriter content={typeWriterHeading} makeStaticDelay={1500} />
        <TypeWriter content={typeWriterSubeading} renderDelay={1500} />
      </HeadingContainer>

      <Navbar />
      <Intro />
      <Skills />
      <Contact />
    </div>
  );
};

export default LandingPage;

const HeadingContainer = styled.div`
  min-height: 150px;
  @media (max-width: 768px) {
    min-height: 80px;
  }
`;
