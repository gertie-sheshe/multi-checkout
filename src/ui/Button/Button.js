import React from "react";
import { Button as StyledButton } from "./ButtonStyles";

function Button({ children, handleClick }) {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
}

export default Button;
