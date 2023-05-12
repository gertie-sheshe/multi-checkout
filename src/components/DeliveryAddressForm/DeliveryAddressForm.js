import React, { useState } from "react";
import { useRouter } from "next/router";
import FormCard from "@checkout/components/FormCard";
import Button from "@checkout/ui/Button";

import useCheckoutStore from "@checkout/store/checkout";

import { Label, Input } from "./DeliveryAddressStyles";
import { ButtonContainer } from "@checkout/shared/styles";

function DeliveryAddressForm() {
  const router = useRouter();

  const [state, setState] = useState(
    useCheckoutStore((state) => {
      const {
        deliveryDetails: { addressLine1, addressLine2, zip, city },
      } = state;

      return {
        address1: addressLine1,
        address2: addressLine2,
        zip,
        city,
      };
    })
  );

  const updateDeliveryDetails = useCheckoutStore(
    (state) => state.updateDeliveryDetails
  );

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNext = (event) => {
    event.preventDefault();
    updateDeliveryDetails({
      addressLine1: state.address1,
      addressLine2: state.address2,
      city: state.city,
      zip: state.zip,
    });

    router.push("/checkout/delivery-options");
  };

  const handlePrevious = (event) => {
    event.preventDefault();

    router.push("/checkout/phone");
  };

  return (
    <FormCard>
      <Label htmlFor="address1">Address Line 1</Label>
      <Input
        name="address1"
        id="address1"
        type="text"
        value={state.address1}
        onChange={handleChange}
      />

      <Label htmlFor="address2">Address Line 2 (Optional)</Label>
      <Input
        name="address2"
        id="address2"
        type="text"
        value={state.address2}
        onChange={handleChange}
      />

      <Label htmlFor="city">City</Label>
      <Input
        name="city"
        id="city"
        type="text"
        value={state.city}
        onChange={handleChange}
      />

      <Label htmlFor="zip">Zip Code</Label>
      <Input
        name="zip"
        id="zip"
        type="text"
        value={state.zip}
        onChange={handleChange}
      />

      <ButtonContainer>
        <Button handleClick={handlePrevious}>Previous</Button>
        <Button handleClick={handleNext}>Continue</Button>
      </ButtonContainer>
    </FormCard>
  );
}

export default DeliveryAddressForm;
