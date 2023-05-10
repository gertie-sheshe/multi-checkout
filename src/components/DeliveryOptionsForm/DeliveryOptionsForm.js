import React, { useState } from "react";
import FormCard from "@checkout/components/FormCard";
import Button from "@checkout/ui/Button";
import useCheckoutStore from "@checkout/store/checkout";

import { OptionContainer, Fieldset } from "./DeliveryOptionsStyles";

function DeliveryOptionsForm() {
  const [selectedOption, setSelectedOption] = useState("Standard");

  const updateDeliveryDetails = useCheckoutStore(
    (state) => state.updateDeliveryDetails
  );

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedOption(value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    updateDeliveryDetails({
      deliveryOption: selectedOption,
    });
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

      <Button handleClick={handleClick}>Continue</Button>
    </FormCard>
  );
}

export default DeliveryOptionsForm;
