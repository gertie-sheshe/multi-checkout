import React from "react";
import { Form } from "./FormCardStyles";

function FormCard({ children }) {
  return <Form novalidate>{children}</Form>;
}

export default FormCard;
