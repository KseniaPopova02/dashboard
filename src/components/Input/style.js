import styled from "styled-components";

export const StyledInput = styled.input`
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
  transition: all 0.3s;
  &:focus {
    border: 2px solid #3751ff;
  }
`;
