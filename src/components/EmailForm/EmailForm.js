import React, { useState } from "react";
import { useRouter } from "next/router";
import FormCard from "@checkout/components/FormCard";
import Button from "@checkout/ui/Button";
import HintText from "@checkout/components/HintText";
import ErrorSummary from "@checkout/components/ErrorSummary";
import ErrorText from "@checkout/components/ErrorText";

import useCheckoutStore from "@checkout/store/checkout";

import { Label, Input } from "./EmailFormStyles";

function EmailForm() {
  const router = useRouter();

  const [errorSummary, setErrorSummary] = useState(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const [email, setEmail] = useState(
    useCheckoutStore((state) => state.deliveryDetails.email)
  );

  const updateDeliveryDetails = useCheckoutStore(
    (state) => state.updateDeliveryDetails
  );

  const handleChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setEmailErrorMessage("Email is required");
      setErrorSummary("There are errors on the form");
      return false;
    }

    if (!emailRegex.test(email)) {
      setEmailErrorMessage("Invalid email address");
      setErrorSummary("There are errors on the form");
      return false;
    }

    setEmailErrorMessage("");
    setErrorSummary("");
    return true;
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (validateForm()) {
      updateDeliveryDetails({
        email,
      });

      router.push("/checkout/phone");
    }
  };

  return (
    <FormCard>
      <ErrorSummary message={errorSummary} />
      <Label htmlFor="email">
        <span>Email Address</span>
        <HintText>So we can send you a receipt of your order</HintText>
        {emailErrorMessage && <ErrorText text={emailErrorMessage} />}
      </Label>
      <Input id="email" type="email" value={email} onChange={handleChange} />
      <Button handleClick={handleClick}>Continue</Button>
    </FormCard>
  );
}

export default EmailForm;
