import React, { useState } from "react";
import FormCard from "@checkout/components/FormCard";
import Button from "@checkout/ui/Button";
import StripeWrapper from "../StripeWrapper";

import useCheckoutStore from "@checkout/store/checkout";

import { Label, Input, HintText } from "./PaymentFormStyles";

function PaymentForm() {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    securityNumber: "",
  });

  const updateDeliveryDetails = useCheckoutStore(
    (state) => state.updateDeliveryDetails
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPaymentDetails((prevState) => ({
      ...prevState,
      [name]: [value],
    }));
  };

  const handleClick = (event) => {
    event.preventDefault();

    updateDeliveryDetails({
      payment: {
        ...paymentDetails,
      },
    });
  };

  return (
    <FormCard>
      <Label htmlFor="cardNumber">
        <span>Card Number</span>
        <HintText>The long number on the front of your card</HintText>
      </Label>
      <Input
        id="cardNumber"
        type="email"
        value={paymentDetails.cardNumber}
        onChange={handleChange}
      />

      <Label htmlFor="expiryDate">
        <span>Expiry Date</span>
        <HintText>MMYY</HintText>
      </Label>
      <Input
        id="expirydate"
        type="email"
        value={paymentDetails.expiryDate}
        onChange={handleChange}
      />

      <Label htmlFor="security">
        <span>Security Number</span>
        <HintText>The last 3 digits on the back of the card</HintText>
      </Label>
      <Input
        id="security"
        type="email"
        value={paymentDetails.securityNumber}
        onChange={handleChange}
      />
      <Button handleClick={handleClick}>Continue</Button>
    </FormCard>
  );
}

export default PaymentForm;
