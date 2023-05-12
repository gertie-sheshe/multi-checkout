import React, { useState } from "react";
import { useRouter } from "next/router";
import FormCard from "@checkout/components/FormCard";
import Button from "@checkout/ui/Button";
import HintText from "@checkout/components/HintText";

import useCheckoutStore from "@checkout/store/checkout";

import {
  Label,
  TextArea,
  RemainingCharacters,
} from "./DeliveryNotesFormStyles";
import { ButtonContainer } from "@checkout/shared/styles";

function DeliveryNotesForm() {
  const router = useRouter();
  const [note, setNote] = useState(
    useCheckoutStore((state) => state.deliveryDetails.deliveryNote)
  );
  const [charCount, setCharCount] = useState(150);

  const updateDeliveryDetails = useCheckoutStore(
    (state) => state.updateDeliveryDetails
  );

  // maxlength attribute is buggy in textarea and is not well supported.
  // This is the workaround to keep track of word length for a wide
  // range of devices and browsers

  const handleInput = (event) => {
    const inputText = event.target.value;
    const remainingChars = 150 - Number(inputText.length);

    // Exceeds character limit
    if (remainingChars < 0) {
      event.preventDefault();
      return;
    }

    setNote(event.target.value);
    setCharCount(remainingChars);
  };

  const handlePaste = (event) => {
    const pastedText = event.clipboardData.getData("text");
    const inputText = event.target.value + pastedText;
    const truncatedText = inputText.substring(0, 150);

    setNote(truncatedText);
    setCharCount(150 - truncatedText.length);
  };

  const handleKeyDown = (event) => {
    const remainingChars = 150 - Number(event.target.value.length);

    if (remainingChars <= 0 && event.key !== "Backspace") {
      event.preventDefault();
      return;
    }

    setNote(event.target.value);
    setCharCount(remainingChars);
  };

  const handleNext = (event) => {
    event.preventDefault();
    updateDeliveryDetails({
      deliveryNote: note,
    });

    router.push("/checkout/review");
  };

  const handlePrevious = (event) => {
    event.preventDefault();

    router.push("/checkout/delivery-options");
  };

  return (
    <FormCard>
      <Label htmlFor="note">
        <span>Delivery Note (optional)</span>
        <HintText>
          If you are not it, tell us where to leave it. For example, &quot;leave
          wih neighbour&quot;
        </HintText>
      </Label>
      <TextArea
        id="note"
        name="note"
        value={note}
        onInput={handleInput}
        onPaste={handlePaste}
        onKeyDown={handleKeyDown}
      />
      <RemainingCharacters
        role="status"
        aria-live="polite"
      >{`You have ${charCount} characters left`}</RemainingCharacters>
      <ButtonContainer>
        <Button handleClick={handlePrevious}>Previous</Button>
        <Button handleClick={handleNext}>Proceed to Review</Button>
      </ButtonContainer>
    </FormCard>
  );
}

export default DeliveryNotesForm;
