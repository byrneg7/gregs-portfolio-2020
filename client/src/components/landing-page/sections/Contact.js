import React from "react";
import styled from "styled-components";
import SectionHeading from "../../shared/SectionHeading";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <SectionHeading heading='contact' subheading='get in touch'/>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 300px;
  background-color: white;
`;
