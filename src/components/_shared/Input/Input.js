import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  background: #fcfdfe;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #4b506d;
  padding: 11px 16px;
  max-width: 316px;
  width: 100%;
  outline: none;
  &:focus {
    border: 2px solid #3751ff;
  }
`;

const Input = ({ type, placeholder, className }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      className={className}
    ></StyledInput>
  );
};

export default Input;

Input.defaultProps = {
  type: "text",
  placeholder: "",
  className: "",
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
