import React from "react";

import { Text } from "./ErrorTextStyles";

function ErrorText({ text }) {
  if (!text) return;

  return <Text>{text}</Text>;
}

export default ErrorText;
