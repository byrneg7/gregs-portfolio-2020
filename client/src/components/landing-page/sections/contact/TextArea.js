import React from "react";
import { ColsContainer, ErrorText, StyledTextArea } from "./Styles";

const TextArea = ({ value, placeholder, handler, error, errorMessage }) => {
  return (
    <ColsContainer>
      <StyledTextArea
        value={value}
        error={error}
        placeholder={placeholder}
        onChange={(e) => handler(e.target.value)}
      />
      {error ? <ErrorText>{errorMessage}</ErrorText> : null}
    </ColsContainer>
  );
};

export default TextArea;
