import React from "react";
import styled from "styled-components";
import {
  ERROR_TEXT_COLOR,
  FONT_GREY,
} from "../../../../assets/stylesheets/colors";

const TextArea = ({
  label,
  type = "text",
  value,
  handler,
  error,
  errorMessage,
}) => {
  return (
    <TextInputContainer type={type}>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextArea
        type={type}
        value={value}
        error={error}
        onChange={(e) => handler(e.target.value)}
      />
      <ErrorText error={error}>{errorMessage}</ErrorText>
    </TextInputContainer>
  );
};

export default TextArea;

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  margin-top: 20px;
  width: 94%;
`;

const StyledTextArea = styled.textarea`
  border-radius: 5px;
  border: ${({ error }) =>
    error ? `1px solid ${ERROR_TEXT_COLOR}` : `1px solid ${FONT_GREY}`};
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100px;

  padding: 0;
  font: 347 16px Share Tech Mono;
`;

const ErrorText = styled.div`
  color: ${ERROR_TEXT_COLOR};
  display: ${({ error }) => (error ? "inline-block" : "none")};
`;

const StyledLabel = styled.label`
  align: left;
  justify-content: left;
  text-align: left;
`;
