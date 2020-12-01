import React, { useState } from 'react'
import { Icon, Step } from 'semantic-ui-react'
import styled from 'styled-components';

import edgescanIcon from '../../../../assets/images/edgescan-icon.png'
import showoffIcon from '../../../../assets/images/showoff-icon.png'
import StepsContent from "./StepsContent";

const STEPS = [
  {src: showoffIcon, title: 'Showoff.ie', key: 'showoff'},
  {src: edgescanIcon, title: 'Edgescan', key: 'edgescan'},
]

const ExperienceNav = () => {
  const [activeStep, setActiveStep] = useState('showoff')

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
      <Step.Group widths={3} style={{marginTop: '0px'}}>
        {renderSteps()}
      </Step.Group>
      <StepsContent currentStep={activeStep}/>
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