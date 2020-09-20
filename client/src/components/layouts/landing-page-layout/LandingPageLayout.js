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
  min-height: 100%;
  bottom: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
