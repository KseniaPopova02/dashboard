import React from "react";
import { StyledLabel } from "./style";

export const Label = ({ children, htmlFor = "", className = "" }) => {
  return (
    <StyledLabel htmlFor={htmlFor} className={className}>
      {children}
    </StyledLabel>
  );
};
