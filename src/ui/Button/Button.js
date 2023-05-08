import React from "react";
import { Button as StyledButton } from "./ButtonStyles";

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
