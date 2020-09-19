import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TypeWriter = ({
  content,
  makeStaticDelay = false,
  renderDelay = false,
}) => {
  const [staticText, setStaticText] = useState(false);
  const [renderPending, setRenderPending] = useState(true);

  useEffect(() => {
    if (renderDelay) {
      setTimeout(() => {
        setRenderPending(false);
      }, renderDelay);
    } else {
      setRenderPending(false);
    }
  });

  useEffect(() => {
    if (makeStaticDelay) {
      setTimeout(() => {
        setStaticText(true);
      }, makeStaticDelay);
    }
  }, []);

  const renderTypedText = () => (
    <TypedTextContainer className="typewriter-container">
      <TypedText>{content}</TypedText>
    </TypedTextContainer>
  );

  const renderStaticText = () => (
    <NormalTextContainer>
      <NormalText>{content}</NormalText>
    </NormalTextContainer>
  );

  const renderContent = () =>
    staticText ? renderStaticText() : renderTypedText();

  const handleDelayAndRenderContent = () =>
    renderPending ? null : renderContent();

  return handleDelayAndRenderContent();
};

export default TypeWriter;

const TypedTextContainer = styled.div`
  display: flex;
  justify-content: center;

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${({ hideCaret }) => (hideCaret ? "black" : "#0e6b0e")};
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const TypedText = styled.div`
  * {
    font-family: "Saira Stencil One", cursive;
    overflow: hidden;
    border-right: 0.15em solid #0e6b0e;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em;
    color: #0e6b0e;
    animation: typing 1.5s steps(12, end), blink-caret 1s step-end infinite;
  }
  h1 {
    font-size: 80px;
    @media (max-width: 768px) {
      font-size: 42px;
    }
  }
  h2 {
    font-size: 42px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  p {
    font-size: 16px;
  }
`;

const NormalTextContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const NormalText = styled.div`
  * {
    font-family: "Saira Stencil One", cursive;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em;
    color: #0e6b0e;
  }
   h1 {
    font-size: 80px;
    @media (max-width: 768px) {
      font-size: 42px;
    }
  }
  h2 {
    font-size: 42px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  p {
    font-size: 16px;
  }
`;
