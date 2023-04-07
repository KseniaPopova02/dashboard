import React from "react";
import { StyledInput } from "./style";

export const InputAnt = ({ type = "text", placeholder = "" }) => (
  <StyledInput className="input" placeholder={placeholder} type={type} />
);
