import js from "../assets/javascript.png";
import node from "../assets/node.png";
import prisma from "../assets/prisma.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import styled from "../assets/styled.png";
import ts from "../assets/typescript.png";
import chakra from "../assets/chakra.png";
import material from "../assets/material.png";
import hook from "../assets/hook-form.png";
import axios from "../assets/axios.png";
import jwt from "../assets/jwt.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import alembic from "../assets/alembic.png";
import sqla from "../assets/sqla.png";
import flask from "../assets/flask.png";
import typeORM from "../assets/typeORM.png";
import express from "../assets/express.png";
import docker from "../assets/docker.png";

export const compareEngines = (project: any) => {
  const engines = [];
  for (let i = 0; i < project.length; i++) {
    if (project[i] === "js") {
      engines.push(js);
    }
    if (project[i] === "ts") {
      engines.push(ts);
    }
    if (project[i] === "py") {
      engines.push(python);
    }
    if (project[i] === "node") {
      engines.push(node);
    }
    if (project[i] === "prisma") {
      engines.push(prisma);
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
    if (project[i] === "chakra") {
      engines.push(chakra);
    }
    if (project[i] === "material") {
      engines.push(material);
    }
    if (project[i] === "hook") {
      engines.push(hook);
    }
    if (project[i] === "axios") {
      engines.push(axios);
    }
    if (project[i] === "jwt") {
      engines.push(jwt);
    }
    if (project[i] === "html") {
      engines.push(html);
    }
    if (project[i] === "css") {
      engines.push(css);
    }
    if (project[i] === "alembic") {
      engines.push(alembic);
    }
    if (project[i] === "sqla") {
      engines.push(sqla);
    }
    if (project[i] === "flask") {
      engines.push(flask);
    }
    if (project[i] === "typeORM") {
      engines.push(typeORM);
    }
    if (project[i] === "express") {
      engines.push(express);
    }
    if (project[i] === "docker") {
      engines.push(docker);
    }
  }

  return engines;
};
