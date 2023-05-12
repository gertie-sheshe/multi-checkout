import React, { useState } from "react";
import { useRouter } from "next/router";
import FormCard from "@checkout/components/FormCard";
import Button from "@checkout/ui/Button";
import HintText from "@checkout/components/HintText";
import useCheckoutStore from "@checkout/store/checkout";

import { Label, Input } from "./ContactFormStyles";
import { ButtonContainer } from "@checkout/shared/styles";

function ContactForm() {
  const router = useRouter();
  const [contact, setContact] = useState(
    useCheckoutStore((state) => state.deliveryDetails.phoneNumber)
  );
  const updateDeliveryDetails = useCheckoutStore(
    (state) => state.updateDeliveryDetails
  );

  const handleChange = (event) => {
    const phoneNumber = event.target.value;
    setContact(phoneNumber);
  };

  const handleNext = (event) => {
    event.preventDefault();
    updateDeliveryDetails({
      phoneNumber: contact,
    });

    router.push("/checkout/delivery-address");
  };

  const handlePrevious = (event) => {
    event.preventDefault();

    router.push("/checkout/email");
  };

  return (
    <FormCard>
      <Label htmlFor="contact">
        <span>Mobile Number (optional)</span>
        <HintText>So we can notify you about delivery</HintText>
      </Label>
      <Input id="contact" type="tel" value={contact} onChange={handleChange} />
      <ButtonContainer>
        <Button handleClick={handlePrevious}>Previous</Button>
        <Button handleClick={handleNext}>Continue</Button>
      </ButtonContainer>
    </FormCard>
  );
}

export default ContactForm;
