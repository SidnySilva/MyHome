import js from "../assets/javascript.png";
import node from "../assets/node.png";
import prisma from "../assets/prisma.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import styled from "../assets/styled.png";
import ts from "../assets/typescript.png";
import chakra from "../assets/chakra.png";

export const compareEngines = (project: any) => {
  const engines = [];
  for (let i = 0; i < project.length; i++) {
    if (project[i] === "js") {
      engines.push(js);
    }
    if (project[i] === "node") {
      engines.push(node);
    }
    if (project[i] === "prisma") {
      engines.push(prisma);
    }
    if (project[i] === "python") {
      engines.push(python);
    }
    if (project[i] === "react") {
      engines.push(react);
    }
    if (project[i] === "redux") {
      engines.push(redux);
    }
    if (project[i] === "styled") {
      engines.push(styled);
    }
    if (project[i] === "ts") {
      engines.push(ts);
    }
    if (project[i] === "chakra") {
      engines.push(chakra);
    }
  }

  return engines;
};
