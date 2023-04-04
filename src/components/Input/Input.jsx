import React from "react";
import { StyledInput } from "./style";
import { Label } from "../Label/Label";

export const Input = ({ type = "text", placeholder = "", className = "" }) => {
  return (
    <>
      <StyledInput
        type={type}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
};
