import React from "react";
import styled from "styled-components";
import uniqid from "uniqid";

import { HACKER_GREEN, OUTLINE_GREY } from "../../assets/stylesheets/colors";
import LinkIcon from "../shared/LinkIcon";
import githubImage from "../../assets/images/svgs/github.svg";
import linkedinImage from "../../assets/images/svgs/linkedin.svg";

const SECTIONS = ["intro", "experience", "skills", "contact"];

const Navbar = () => {
  const renderLinks = () => {
    return SECTIONS.map((section) => {
      return (
        <NavLink key={uniqid()} href={`/#${section}`}>
          {section}
        </NavLink>
      );
    });
  };
  return (
    <NavbarContainer>
      <ExternalLinks>
        <LinkIcon
          src={githubImage}
          altText="github logo"
          url="https://github.com/byrneg7"
        />
        <LinkIcon
          src={linkedinImage}
          altText="linkedin logo"
          url="https://www.linkedin.com/in/byrneg7/"
        />
      </ExternalLinks>
      <LinkContainer>
        {renderLinks()}
        <NavLink href={`/demos`}>Demos</NavLink>
      </LinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  border-bottom: 1px solid ${OUTLINE_GREY};
  display: flex;
  flex-direction: row;
`;

const ExternalLinks = styled.div`
  width: 60%;
  display: flex;
  margin-left: 20px;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    width: 30%;
  }
`;

const NavLink = styled.a`
  :hover {
    color: ${HACKER_GREEN} !important;
  }
`;

const LinkContainer = styled.div`
  width: 40%;
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  text-transform: capitalize;
  @media (max-width: 768px) {
    width: 100%;
  }

  a {
    animation: fadein 5s;
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    font-size: 20px;
    text-decoration: none;

    :visited {
      color: black;
    }

    :link {
      color: black;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
