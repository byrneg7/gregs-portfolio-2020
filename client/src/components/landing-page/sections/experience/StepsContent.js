import React from 'react';

const STEPS_CONTENT = {
  showoff: {
    title: 'Showoff.ie'
  },
  edgescan: {
    title: 'Edgescan'
  },
}

const StepsContent = ({currentStep}) => {
  const renderStep = () => {
    if (currentStep) {
      return (
        <div>
          {STEPS_CONTENT[currentStep].title}
        </div>
      )
    }
    return null;
  }
  return renderStep()
}

export default StepsContent;