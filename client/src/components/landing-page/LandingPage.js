import React from "react";
import TypeWriter from "../shared/TypeWriter";

const LandingPage = () => {
  const typeWriterHeading = <h1>Hello world.</h1>;
  const typeWriterSubeading = <h2>Greg Byrne. Web developer.</h2>;

  return (
    <div>
      <TypeWriter content={typeWriterHeading} makeStaticDelay={1500} />
      <TypeWriter content={typeWriterSubeading} renderDelay={1500} />
    </div>
  );
};

export default LandingPage;
