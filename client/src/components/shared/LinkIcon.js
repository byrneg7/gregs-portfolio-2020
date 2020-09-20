import React from 'react';
import styled from 'styled-components';

const LinkIcon = ({src, altText='alt text', url}) => {
  return (
    <a href={url} target='_blank' rel="noopener noreferrer">
      <CustomIcon src={src} alt={altText} />
    </a>
    )
};

export default LinkIcon;

const CustomIcon = styled.img`
  height: 60px;
  width: 60px;
  :hover {
    cursor: pointer
  };
`;