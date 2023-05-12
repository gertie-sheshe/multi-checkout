import React, { useState } from "react";
import { useRouter } from "next/router";
import FormCard from "@checkout/components/FormCard";
import Button from "@checkout/ui/Button";
import useCheckoutStore from "@checkout/store/checkout";

import { OptionContainer, Fieldset } from "./DeliveryOptionsStyles";
import { ButtonContainer } from "@checkout/shared/styles";

function DeliveryOptionsForm() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("Standard");

  const updateDeliveryDetails = useCheckoutStore(
    (state) => state.updateDeliveryDetails
  );

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedOption(value);
  };

  const handleNext = (event) => {
    event.preventDefault();
    updateDeliveryDetails({
      deliveryOption: selectedOption,
    });

    router.push("/checkout/delivery-notes");
  };

  const handlePrevious = (event) => {
    event.preventDefault();

    router.push("/checkout/delivery-address");
  };

  return (
    <FormCard>
      <Fieldset>
        <legend>
          <span>Delivery Options</span>
        </legend>
        <OptionContainer>
          <input
            type="radio"
            name="option"
            id="option"
            value="Standard"
            checked={selectedOption === "Standard"}
            onChange={handleChange}
          />
          <label htmlFor="option">Standard (Free, 2-3 days)</label>
        </OptionContainer>
        <OptionContainer>
          <input
            type="radio"
            name="option"
            id="option2"
            value="Premium"
            checked={selectedOption === "Premium"}
            onChange={handleChange}
          />
          <label htmlFor="option2">Premium (Next Day, 500Kshs)</label>
        </OptionContainer>
      </Fieldset>

      <ButtonContainer>
        <Button handleClick={handlePrevious}>Previous</Button>
        <Button handleClick={handleNext}>Continue</Button>
      </ButtonContainer>
    </FormCard>
  );
}

export default DeliveryOptionsForm;
