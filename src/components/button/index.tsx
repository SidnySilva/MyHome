import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Buttons } from "./styles";

interface ButtonProps {
  text: string;
  page: string;
}

export const Button = (children: ButtonProps) => {
  const navigate = useNavigate();

  return (
    <Buttons onClick={() => navigate(`/${children.page}`)}>
      {children.text}
    </Buttons>
  );
};
