import React from "react";

import { Container, Summary } from "./ErrorSummaryStyles";

function ErrorSummary({ message }) {
  if (!message) return;

  return (
    <Container aria-live="assertive">
      <Summary>{message}</Summary>
    </Container>
  );
}

export default ErrorSummary;
