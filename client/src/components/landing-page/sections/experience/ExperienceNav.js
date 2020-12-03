import React, { useState } from 'react'
import { Step } from 'semantic-ui-react'
import styled from 'styled-components';

import edgescanIcon from '../../../../assets/images/edgescan-icon.png'
import showoffIcon from '../../../../assets/images/showoff-icon.png'
import CustomCarousel from "./CustomCarousel";

const STEPS = [
  {src: edgescanIcon, title: 'Edgescan', key: 'edgescan'},
  {src: showoffIcon, title: 'Showoff.ie', key: 'showoff'},
]

const STEP_COUNT = {edgescan: 0, showoff: 1};

const ExperienceNav = () => {
  const [jobIndex, setJobIndex] = useState(0)

  const renderSteps = () => STEPS.map((step, index) => {
    const {src, title, key} = step;
    return (
      <Step onClick={() => setJobIndex(index)} active={STEP_COUNT[key] === jobIndex }>
        <CustomIcon src={src} alt={title}/>
        <Step.Content>
          <Step.Title>{title}</Step.Title>
        </Step.Content>
      </Step>
    )
  })

  return (
    <>
      <Row>
        <StepsContainer>
          <Step.Group widths={3} style={{marginTop: '0px'}} unstackable>
            {renderSteps()}
          </Step.Group>
        </StepsContainer>
      </Row>
      <Row>
        <CustomCarousel jobIndex={jobIndex}/>
      </Row>
    </>
  )
};

export default ExperienceNav

const CustomIcon = styled.img`
  height: 1em;
    font-family: Icons;
    font-style: normal;
    font-weight: 400;
    text-decoration: inherit;
    text-align: center;
    speak: none;
   margin-right: 10px;
   height:25px;
`

const StepsContainer = styled.div`
  width: 100%;
   @media (max-width: 400px) {
     max-width: 90%;
    }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`