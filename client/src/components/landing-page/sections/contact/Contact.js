import React, { useState } from "react";
import styled from "styled-components";
import SectionHeading from "../../../shared/SectionHeading";
import TextInput from "./TextInput";
import TextArea from "./TextArea";

const Contact = () => {
  const [from, setFrom] = useState("");
  const [fromError, setFromError] = useState(false);

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);

  const handleMessageInput = (text) => {
    setMessageError(false);
    setMessage(text);
  };

  const handleFromInput = (text) => {
    setFromError(false);
    setFrom(text);
  };

  const handleTitleInput = (text) => {
    setTitleError(false);
    setTitle(text);
  };

  const handleSubmit = (e) => {
    checkForErrors();
    e.preventDefault();
    if (isFormInvalid()) {
      console.log("form isnt valid");
    } else {
      console.log(from, title, message);
    }
  };

  const isFormInvalid = () =>
    fromError || titleError || messageError || !from || !title || !message;

  const checkForErrors = () => {
    if (!from) setFromError(true);
    if (!title) setTitleError(true);
    if (!message) setMessageError(true);
  };

  return (
    <ContactContainer id="contact">
      <SectionHeading heading="contact" subheading="get in touch" />
      <StyledForm onSubmit={handleSubmit}>
        <TextInput
          handler={handleFromInput}
          label="Your email address:"
          type="text"
          value={from}
          side="left"
          error={fromError}
          errorMessage="Please enter your email address!"
        />
        <TextInput
          handler={handleTitleInput}
          label="Title:"
          type="text"
          side="right"
          value={title}
          error={titleError}
          errorMessage="Required!"
        />
        <TextArea
          handler={handleMessageInput}
          label="Your message:"
          type="textarea"
          value={message}
          error={messageError}
          errorMessage="Please enter a message!"
        />
        <StyledButton type="submit">Send</StyledButton>
      </StyledForm>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 300px;
  background-color: white;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  width: 100px;
  height: 30px;
  border-radius: 20px;

  :hover {
    cursor: pointer;
  }
`;
