import React, { useState } from "react";
import styled from "styled-components";
import SectionHeading from "../../../shared/SectionHeading";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import { toast } from "react-toastify";
import {
  FONT_PURPLE,
  FONT_PURPLE_DARK,
} from "../../../../assets/stylesheets/colors";
import axios from "axios";
import HorizontalDivide from "../../../shared/HorizontalDivide";

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
      sendEmail({ from, title, message });
    }
  };

  const sendEmail = (...formData) => {
    resetForm();
    axios
      .post("/api/contact", formData)
      .then((res) => {
        toast.success("Email sent successfully, thanks for getting in touch!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        toast.error("Error, please try again later", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const isFormInvalid = () =>
    fromError || titleError || messageError || !from || !title || !message;

  const checkForErrors = () => {
    if (!from) setFromError(true);
    if (!title) setTitleError(true);
    if (!message) setMessageError(true);
  };

  const resetForm = () => {
    setFrom("");
    setTitle("");
    setMessage("");
  };

  return (
    <ContactContainer id="contact">
      <HorizontalDivide width="100%" marginBot="40px" />
      <SectionHeading heading="contact" subheading="get in touch" />
      <StyledForm onSubmit={handleSubmit}>
        <Row>
          <TextInput
            handler={handleFromInput}
            label="Your email address:"
            type="text"
            value={from}
            side="left"
            placeholder="Email address..."
            error={fromError}
            errorMessage="Please enter your email address"
          />
        </Row>
        <Row>
          <TextInput
            handler={handleTitleInput}
            label="Title:"
            type="text"
            side="right"
            placeholder="Title..."
            value={title}
            error={titleError}
            errorMessage="Please enter a title for your message"
          />
        </Row>
        <Row>
          <TextArea
            handler={handleMessageInput}
            label="Your message:"
            placeholder="Message..."
            type="textarea"
            value={message}
            error={messageError}
            errorMessage="Please add a message"
          />
        </Row>
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
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  width: 100%;
  ${({ customStyles }) => customStyles}
`;

const StyledButton = styled.button`
  margin-top: 20px;
  width: 100px;
  height: 30px;
  border-radius: 20px;
  background-color: ${FONT_PURPLE};
  color: white;
  border-style: none;
  border-color: ${FONT_PURPLE};
  font-family: "Share Tech Mono", monospace;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }

  :active {
    background-color: ${FONT_PURPLE_DARK};
  }
`;
