import styled from "styled-components";
import { FONT_DANGER, FONT_GREY } from "../../../../assets/stylesheets/colors";

export const ErrorText = styled.p`
  color: ${FONT_DANGER};
  margin: 0 0 0 0;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0;
  border-width: 1;
  border: ${({ error }) =>
    error ? `1px solid ${FONT_DANGER}` : `1px solid ${FONT_GREY}`};
  border-radius: 6px;
  height: 32px;
  font-size: 16px;
  padding-left: 10px;
`;

export const StyledLabel = styled.p`
  font-size: 16px;
  margin: 0px 0px 5px 0px;
`;

export const ColsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: ${({ error }) =>
    error ? `1px solid ${FONT_DANGER}` : `1px solid ${FONT_GREY}`};
  border-radius: 6px;
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10x;
  resize: vertical;
`;
