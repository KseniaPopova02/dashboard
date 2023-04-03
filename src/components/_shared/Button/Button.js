import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBtn = styled.button`
  background: #3751ff;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  padding: 15px 24px;
  color: #fff;
  border: none;
  max-width: 316px;
  width: 100%;
`;

const Button = ({ children, onClick, className, disabled }) => {
  const handleClick = (e) => {
    if (!disabled) {
      onClick(e);
    }
  };
  return (
    <StyledBtn onClick={handleClick} className={className} disabled={disabled}>
      {children}
    </StyledBtn>
  );
};

export default Button;

Button.defaultProps = { onClick: () => {}, className: "", disabled: false };

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
