import React from "react";
import PropTypes from "prop-types";
import { StyledBtn } from "./styled";

export const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = "false",
}) => {
  const handleClick = (e) => {
    onClick(e);
  };
  return (
    <StyledBtn
      onClick={handleClick}
      className={className}
      type={type}
      disabled={disabled}
    >
      {children}
    </StyledBtn>
  );
};
