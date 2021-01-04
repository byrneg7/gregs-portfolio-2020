import React from "react";
import styled from "styled-components";
import {
  FONT_GREY,
  FONT_GREY_DARK,
  HACKER_GREEN,
} from "../../../../assets/stylesheets/colors";

const JobDescription = ({ job }) => {
  const renderJobHeading = ({ url, title, date }) => {
    return (
      <JobHeading>
        <JobCompany href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </JobCompany>
        <JobHeadingText>{date}</JobHeadingText>
      </JobHeading>
    );
  };

  const renderSections = () =>
    ["description", "technologies", "highlights"].map((section) => {
      return (
        <>
          <DescriptionHeader>
            <Dot />
            <DescriptionHeaderText>{section}</DescriptionHeaderText>
          </DescriptionHeader>
          <ListContainer>{renderSectionInfo(section)}</ListContainer>
        </>
      );
    });

  const renderSectionInfo = (section) => {
    const currentSection = job[section];
    if (currentSection) {
      return currentSection?.map((listInfo) => (
        <NoDotListElement>{listInfo}</NoDotListElement>
      ));
    }
    return null;
  };

  return (
    <WorkExperienceContainer>
      {renderJobHeading(job)}
      <Col style={{ marginLeft: "10px" }}>{renderSections()}</Col>
    </WorkExperienceContainer>
  );
};

export default JobDescription;

const WorkExperienceContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 300px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const JobHeading = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
  justify-content: space-between;
`;

const JobHeadingText = styled.p`
  color: ${FONT_GREY_DARK};
  font-size: 14px;
  font-style: italic;
`;

const JobCompany = styled.a`
  color: ${FONT_GREY_DARK};
  font-weight: bold;
  font-size: 18px;
  :hover {
    color: ${HACKER_GREEN} !important;
  }
`;

const Dot = styled.span`
  height: 15px;
  width: 15px;
  margin-bottom: 8px;
  margin-left: -7px;
  background-color: ${FONT_GREY};
  border-radius: 50%;
  display: inline-block;
`;

const DescriptionHeader = styled(Row)`
  margin-top: 10px;
  align-items: center;
`;
const DescriptionHeaderText = styled.p`
  font-size: 14px;
  margin-bottom: 6px !important;
  margin-left: 5px;
  color: ${FONT_GREY_DARK};
  text-transform: capitalize;
`;

const ListContainer = styled.div`
  border-left: 1px solid ${FONT_GREY};
  li: before {
    content: "\\2022";
    color: ${FONT_GREY};
    margin-right: 10px;
  }
`;

const NoDotListElement = styled.li`
  list-style: none;
  margin-left: 30px;
`;
