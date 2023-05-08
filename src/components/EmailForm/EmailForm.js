import React, { useState } from "react";
import FormCard from "@checkout/components/FormCard";
import Button from "@checkout/ui/Button";
import useCheckoutStore from "@checkout/store/checkout";

function EmailForm() {
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
  };

  return (
    <FormCard>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" value={email} onChange={handleChange} />
      <Button onClick={handleClick}>Continue</Button>
    </FormCard>
  );
}

export default EmailForm;
