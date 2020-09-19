import React from "react";
import styled from "styled-components";

const LandingPageLayout = ({ children }) => {
  return (
    <LandingPageContainer>
      landing page layout
      {children}
    </LandingPageContainer>
  );
};

export default LandingPageLayout;

const LandingPageContainer = styled.div`
  position: absolute;
  height: auto;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
`;
