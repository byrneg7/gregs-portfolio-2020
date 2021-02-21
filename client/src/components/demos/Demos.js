import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { capitalize } from "../../utils";

const DEMOS = ["snake", "paint"];

const Demos = () => {
  const [components, setComponents] = useState([]);
  useEffect(() => {
    loadDemos(DEMOS);
  }, []);

  const loadDemos = (demos) =>
    Promise.all(
      demos.map((demo) => import(`./${demo}/${capitalize(demo)}.js`))
    ).then((res) => {
      setComponents(res);
    });

  const renderComponents = () => {
    if (components && components.length > 0) {
      return components.map((component) => {
        return component.default();
      });
    }
  };

  return <DemoContainer>{renderComponents()}</DemoContainer>;
};

export default Demos;

const DemoContainer = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  max-width: 800px;
  width: 80%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
