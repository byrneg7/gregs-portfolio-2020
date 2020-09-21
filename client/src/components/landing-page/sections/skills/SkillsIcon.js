import React from 'react';
import styled from 'styled-components';
import { OUTLINE_LIGHT_GREY } from "../../../../assets/stylesheets/colors";

const SkillsIcon = ({src, altText, height, width}) => {
  return(
    <SkillsIconContainer>
      <SkillIcon src={src} alt={altText} height={height} width={width}/>
    </SkillsIconContainer>
  )
};

const SkillsIconContainer = styled.div`
  display: flex;
  min-height: 200px;
  min-width: 200px;
  margin: 50px;
  height: 200px;
  flex-wrap: wrap;
  width: 200px;
  background-color: ${OUTLINE_LIGHT_GREY};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 3px 3px 5px 6px #ccc;
  :hover {
   cursor: pointer;
  }
  &:hover {
     content: “ ”;
     filter: blur(5px);
      box-shadow: inset 0 0 5px #000000;
}
`;

const SkillIcon = styled.img`
  height:${(height)=> height};
  width:${(width)=> width};
`;

export default SkillsIcon;