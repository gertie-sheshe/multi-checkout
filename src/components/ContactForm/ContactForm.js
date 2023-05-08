import React, { useState } from "react";
import FormCard from "@checkout/components/FormCard";
import Button from "@checkout/ui/Button";
import useCheckoutStore from "@checkout/store/checkout";

import { Label, Input, HintText } from "./ContactFormStyles";

function ContactForm() {
  const [contact, setContact] = useState("");
  const updateDeliveryDetails = useCheckoutStore(
    (state) => state.updateDeliveryDetails
  );

  const handleChange = (event) => {
    const phoneNumber = event.target.value;
    setContact(phoneNumber);
  };

  const handleClick = (event) => {
    event.preventDefault();
    updateDeliveryDetails({
      phoneNumber: contact,
    });
  };

  return (
    <FormCard>
      <Label htmlFor="contact">
        <span>Mobile Number (optional)</span>
        <HintText>So we can notify you about delivery</HintText>
      </Label>
      <Input id="contact" type="tel" value={contact} onChange={handleChange} />
      <Button handleClick={handleClick}>Continue</Button>
    </FormCard>
  );
}

export default ContactForm;
