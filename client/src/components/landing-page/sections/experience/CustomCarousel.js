import React, { useState } from 'react'
import { Carousel } from "react-bootstrap";
import WorkExperience from "./JobDescription";
import JobDescription from "./JobDescription";

const STEPS_CONTENT = [
  {
    title: 'Edgescan',
    url: 'https://www.edgescan.com',
    date: 'Aug 2020 - present',
    description: ['edgescan description'],
    technologies: ["Rails", "React", "Figma", "AWS"],
    highlights: ["foo", "bar"]
  },
  {
    title: 'Showoff.ie',
    url: 'https://www.showoff.ie',
    date: 'April 2019 - Aug 2020',
    description: ['showoff description'],
    technologies: ["Rails", "React", "Heroku"],
    highlights: ["foo", "bar"]
  }
]

const CustomCarousel = ({jobIndex}) => {
  const renderJobs = () => STEPS_CONTENT.map(job => {
    return (
      <Carousel.Item>
        <JobDescription job={job}/>
      </Carousel.Item>
    )
  })

  return (
    <Carousel activeIndex={jobIndex} indicators={false} style={{width: '100%'}} touch={false} controls={false}>
      {renderJobs()}
    </Carousel>
  );
}

export default CustomCarousel;