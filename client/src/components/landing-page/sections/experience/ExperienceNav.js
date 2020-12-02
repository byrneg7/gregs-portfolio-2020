import React, { useState } from 'react'
import { Step } from 'semantic-ui-react'
import styled from 'styled-components';

import edgescanIcon from '../../../../assets/images/edgescan-icon.png'
import showoffIcon from '../../../../assets/images/showoff-icon.png'
import WorkExperience from "./WorkExperience";

const STEPS = [
  {src: edgescanIcon, title: 'Edgescan', key: 'edgescan'},
  {src: showoffIcon, title: 'Showoff.ie', key: 'showoff'},
]

const ExperienceNav = () => {
  const [activeStep, setActiveStep] = useState('edgescan')

  const renderSteps = () => STEPS.map(({src, title, key}) => {
    return (
      <Step onClick={() => setActiveStep(key)} active={activeStep === key}>
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
        <WorkExperience currentStep={activeStep}/>
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