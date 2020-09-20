import React from "react";
import styled from "styled-components";
import { HACKER_GREEN } from "../../../assets/stylesheets/colors";

const SECTIONS = ["intro", "skills", "contact"];

const Navbar = () => {
  const renderLinks = () => {
    return SECTIONS.map((section) => {
      return <a href={`#${section}`}>{section}</a>;
    });
  };
  return <NavbarContainer>{renderLinks()}</NavbarContainer>;
};

export default Navbar;

const NavbarContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-transform: capitalize;
  @media (max-width: 768px) {
    margin-top: 20px;
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
      color: ${HACKER_GREEN};
    }

    :link {
      color: ${HACKER_GREEN};
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
