import React from "react";
import styled from "styled-components";
import {
  ERROR_TEXT_COLOR,
  FONT_GREY,
} from "../../../../assets/stylesheets/colors";

const TextInput = ({
  label,
  type = "text",
  value,
  handler,
  error,
  side,
  errorMessage,
}) => {
  return (
    <TextInputContainer type={type} side={side}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        value={value}
        error={error}
        onChange={(e) => handler(e.target.value)}
      />
      <ErrorText error={error}>{errorMessage}</ErrorText>
    </TextInputContainer>
  );
};

export default TextInput;

// top right bot left
// 25px 50px 75px 100px;

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: auto;
  margin: ${({ side }) =>
    side === "left" ? "0px 50px 0px 0px" : "0px 0px 0px 50px"};
  min-width: 200px;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  border: ${({ error }) =>
    error ? `1px solid ${ERROR_TEXT_COLOR}` : `1px solid ${FONT_GREY}`};
  width: 100%;
  line-height: 40px;
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
