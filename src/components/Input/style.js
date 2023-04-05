import styled from "styled-components";

export const StyledInput = styled.input`
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  color: #4b506d;
  padding: 11px 16px;
  max-width: 316px;
  width: 100%;
  outline: none;
  transition: all 0.3s;
  &:focus {
    border-color: #3751ff;
  }
`;
