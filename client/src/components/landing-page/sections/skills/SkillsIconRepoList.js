import React from "react";
import styled from "styled-components";
import {
  FONT_GREY_DARK,
  HACKER_GREEN,
} from "../../../../assets/stylesheets/colors";

const SkillsIconRepoList = ({ repos }) =>
  repos.map(({ title, repoSlug }) => {
    return (
      <RepoLink
        href={`https://github.com/byrneg7/${repoSlug}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </RepoLink>
    );
  });

export default SkillsIconRepoList;

const RepoLink = styled.a`
  display: block;
  margin: 10px 0px;
  color: ${FONT_GREY_DARK};
  :hover {
    color: ${HACKER_GREEN} !important;
  }
`;
