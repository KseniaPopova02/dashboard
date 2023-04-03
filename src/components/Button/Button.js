import React from "react";
import PropTypes from "prop-types";
import { StyledBtn } from "./styled";

const Button = ({ children, onClick, className, type, disabled }) => {
  const handleClick = (e) => {
    if (!disabled) {
      onClick(e);
    }
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

export default Button;

Button.defaultProps = {
  onClick: () => {},
  className: "",
  type: "button",
  disabled: false,
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
