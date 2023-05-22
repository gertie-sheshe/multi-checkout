import React, { useState } from "react";
import { useRouter } from "next/router";
import FormCard from "@checkout/components/FormCard";
import Button from "@checkout/ui/Button";
import ErrorSummary from "@checkout/components/ErrorSummary";
import ErrorText from "@checkout/components/ErrorText";

import useCheckoutStore from "@checkout/store/checkout";

import { Label, Input } from "./DeliveryAddressStyles";
import { ButtonContainer } from "@checkout/shared/styles";

function DeliveryAddressForm() {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [errorSummary, setErrorSummary] = useState("");

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

  const validateForm = () => {
    const { address1, city, zip } = state;
    const newErrors = {};

    if (!address1) newErrors.address1 = "Address Line 1 is required";
    if (!city) newErrors.city = "City is required";
    if (!zip) newErrors.zip = "Zip code is required";

    setErrors(newErrors);
    setErrorSummary("Something is wrong. There are errors on the form");

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (event) => {
    event.preventDefault();

    if (validateForm()) {
      updateDeliveryDetails({
        addressLine1: state.address1,
        addressLine2: state.address2,
        city: state.city,
        zip: state.zip,
      });

      router.push("/checkout/delivery-options");
    }
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    router.push("/checkout/phone");
  };

  return (
    <FormCard>
      <ErrorSummary message={errorSummary} />
      <Label htmlFor="address1">
        <span>Address Line 1</span>
        {errors.address1 && <ErrorText text={errors.address1} />}
      </Label>
      <Input
        name="address1"
        id="address1"
        type="text"
        value={state.address1}
        aria-invalid={errors.address1 ? "true" : "false"}
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

      <Label htmlFor="city">
        <span>City</span>
        {errors.city && <ErrorText text={errors.city} />}
      </Label>
      <Input
        name="city"
        id="city"
        type="text"
        value={state.city}
        aria-invalid={errors.city ? "true" : "false"}
        onChange={handleChange}
      />

      <Label htmlFor="zip">
        <span>Zip Code</span>
        {errors.zip && <ErrorText text={errors.zip} />}
      </Label>
      <Input
        name="zip"
        id="zip"
        type="text"
        value={state.zip}
        aria-invalid={errors.zip ? "true" : "false"}
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
