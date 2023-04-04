import React from "react";
import { StyledBtn } from "./styled";
import { Button } from "antd";

export const ButtonForm = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = "false",
}) => (
  <StyledBtn
    onClick={onClick}
    className={className}
    type={type}
    disabled={disabled}
  >
    {children}
  </StyledBtn>
  // <Button
  //   onClick={onClick}
  //   className={className}
  //   type={type}
  //   disabled={disabled}
  // >
  //   {children}
  // </Button>
);
