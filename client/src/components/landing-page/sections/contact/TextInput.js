import React from "react";
import { ColsContainer, ErrorText, StyledInput, StyledLabel } from "./Styles";

const TextInput = ({
  type = "text",
  value,
  label,
  handler,
  placeholder,
  error,
  errorMessage,
}) => {
  return (
    <ColsContainer>
      <StyledLabel> {label}</StyledLabel>
      <StyledInput
        error={error}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handler(e.target.value)}
      />

      {error ? <ErrorText>{errorMessage}</ErrorText> : null}
    </ColsContainer>
  );
};

export default TextInput;
