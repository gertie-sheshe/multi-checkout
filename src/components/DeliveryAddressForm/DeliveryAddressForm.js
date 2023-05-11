import React, { useState } from "react";
import FormCard from "@checkout/components/FormCard";
import Button from "@checkout/ui/Button";
import useCheckoutStore from "@checkout/store/checkout";

import { Label, Input, HintText } from "./DeliveryAddressStyles";

function DeliveryAddressForm() {
  const [state, setState] = useState({
    address1: "",
    address2: "",
    zip: "",
    city: "",
  });

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

  const handleClick = (event) => {
    event.preventDefault();
    updateDeliveryDetails({
      addressLine1: state.address1,
      addressLine2: state.address2,
      city: state.city,
      zip: state.zip,
    });
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

      <Button handleClick={handleClick}>Continue</Button>
    </FormCard>
  );
}

export default DeliveryAddressForm;
