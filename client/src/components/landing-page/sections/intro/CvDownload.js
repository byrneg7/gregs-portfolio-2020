import React from "react";
import styled from "styled-components";

import downloadIcon from "../../../../assets/images/svgs/downloadicon.svg";
import pdf from "../../../../assets/pdfs/resume.pdf";
import {
  FONT_GREY_DARK,
  HACKER_GREEN,
} from "../../../../assets/stylesheets/colors";

const CvDownload = () => {
  return (
    <CvDownloadContainer>
      <StyledLink href={pdf} target="_blank" rel="noreferrer">
        Download my Resume
      </StyledLink>
      <StyledImg src={downloadIcon} />
    </CvDownloadContainer>
  );
};

export default CvDownload;

const CvDownloadContainer = styled.div`
  display: flex;
  width: 100%;
  animation: fadein 5s;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: ${FONT_GREY_DARK};

  :hover {
    color: ${HACKER_GREEN};
    text-decoration: underline;
  }
`;

const StyledImg = styled.img`
  margin-top: 10px;
  height: 20px;
  width: 20px;
`;
