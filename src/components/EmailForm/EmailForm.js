import React, { useState } from "react";
import { useRouter } from "next/router";
import FormCard from "@checkout/components/FormCard";
import Button from "@checkout/ui/Button";
import HintText from "@checkout/components/HintText";

import useCheckoutStore from "@checkout/store/checkout";

import { Label, Input } from "./EmailFormStyles";

function EmailForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const updateDeliveryDetails = useCheckoutStore(
    (state) => state.updateDeliveryDetails
  );

  const handleChange = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handleClick = (event) => {
    event.preventDefault();
    updateDeliveryDetails({
      email,
    });

    router.push("/checkout/phone");
  };

  return (
    <FormCard>
      <Label htmlFor="email">
        <span>Email Address</span>
        <HintText>So we can send you a receipt of your order</HintText>
      </Label>
      <Input id="email" type="email" value={email} onChange={handleChange} />
      <Button handleClick={handleClick}>Continue</Button>
    </FormCard>
  );
}

export default EmailForm;
