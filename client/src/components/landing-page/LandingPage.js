import React from "react";
import styled from "styled-components";

import TypeWriter from "../shared/TypeWriter";
import Intro from "./sections/Intro";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Navbar from "./navbar/Navbar";
import HorizontalDivide from "../shared/HorizontalDivide";

const LandingPage = () => {
    const typeWriterHeading = <h1>Hello world.</h1>;
    const typeWriterSubeading = <h2>Greg Byrne. Web developer.</h2>;

    return (
        <div>
            <Navbar/>
            <HeadingContainer>
                <Header>
                    <TypeWriter content={typeWriterHeading} makeStaticDelay={1500}/>
                    <TypeWriter content={typeWriterSubeading} renderDelay={1500}/>
                </Header>
            </HeadingContainer>
            <HorizontalDivide/>
            <SectionsContainer>
              <SectionsContainerInner>
                <Intro/>
                <Skills/>
                <Contact/>
              </SectionsContainerInner>
            </SectionsContainer>
        </div>
    );
};

export default LandingPage;

const HeadingContainer = styled.div`
  display:flex;
  justify-content:center;
  margin-top: 200px;
  margin-bottom: 50px;
  min-height: 150px;
  @media (max-width: 768px) {
    min-height: 80px;
  }
`;

const Header = styled.div`
  max-width: 800px;
`;

const SectionsContainer = styled.div`
  display:flex;
  justify-content: center;
`;

const SectionsContainerInner = styled.div`
  width: 75vw;
  
  @media (max-width: 768px) {
    width: 90vw;
  }
`;
