import React from "react";
import { StyledQuestionSpan, StyledQuestionText } from "./style";

export const Question = ({ href = "" }) => (
  <StyledQuestionText>
    Don’t have an account?
    <StyledQuestionSpan href={href}>Sign up</StyledQuestionSpan>
  </StyledQuestionText>
);
