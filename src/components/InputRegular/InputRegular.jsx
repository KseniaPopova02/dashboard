import React from "react";
import { StyledInput } from "./style";

export const InputRegular = ({
  type = "text",
  placeholder = "",
  className = "",
}) => (
  <StyledInput type={type} placeholder={placeholder} className={className} />
);
