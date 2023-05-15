import React, { useState } from "react";
import FormCard from "@checkout/components/FormCard";
import Button from "@checkout/ui/Button";
import HintText from "@checkout/components/HintText";

import useCheckoutStore from "@checkout/store/checkout";
import { useRouter } from "next/router";

import { Label, Input } from "./PaymentFormStyles";

function PaymentForm() {
  const router = useRouter();
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

    router.push("/checkout/confirm");
  };

  return (
    <FormCard>
      <Label htmlFor="cardNumber">
        <span>Card Number</span>
        <HintText>The long number on the front of your card</HintText>
      </Label>
      <Input
        id="cardNumber"
        type="text"
        value={paymentDetails.cardNumber}
        onChange={handleChange}
      />

      <Label htmlFor="expiryDate">
        <span>Expiry Date</span>
        <HintText>MMYY</HintText>
      </Label>
      <Input
        id="expirydate"
        type="text"
        value={paymentDetails.expiryDate}
        onChange={handleChange}
      />

      <Label htmlFor="security">
        <span>Security Number</span>
        <HintText>The last 3 digits on the back of the card</HintText>
      </Label>
      <Input
        id="security"
        type="number"
        value={paymentDetails.securityNumber}
        onChange={handleChange}
      />
      <Button handleClick={handleClick}>Place Order</Button>
    </FormCard>
  );
}

export default PaymentForm;
