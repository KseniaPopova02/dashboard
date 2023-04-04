import React from "react";
import { StyledInput } from "./style";

export const Input = ({ type = "text", placeholder = "", className = "" }) => (
  <StyledInput type={type} placeholder={placeholder} className={className} />
);
