import React from "react";
import Link from "next/link";
import Button from "@checkout/ui/Button";
import useCheckoutStore from "@checkout/store/checkout";

import { useRouter } from "next/router";

import { DeliveryDetailContainer, P } from "./DeliveryDetailsStyles";

function DeliveryDetails() {
  const router = useRouter();
  const deliveryDetails = useCheckoutStore((state) => state.deliveryDetails);

  if (!deliveryDetails) return;

  const { email, phoneNumber, addressLine1, deliveryOption, deliveryNote } =
    deliveryDetails;

  const handleClick = (event) => {
    event.preventDefault();

    router.push("/checkout/payment");
  };

  return (
    <div>
      <DeliveryDetailContainer>
        <P>Email: {`${email}`}</P>
        <Link href="/checkout/email">Edit</Link>
      </DeliveryDetailContainer>

      <DeliveryDetailContainer>
        <P>Mobile: {`${phoneNumber}`}</P>
        <Link href="/checkout/contact">Edit</Link>
      </DeliveryDetailContainer>

      <DeliveryDetailContainer>
        <P>Address: {`${addressLine1}`}</P>
        <Link href="/checkout/delivery-address">Edit</Link>
      </DeliveryDetailContainer>

      <DeliveryDetailContainer>
        <P>Method: {`${deliveryOption}`}</P>
        <Link href="/checkout/delivery-option">Edit</Link>
      </DeliveryDetailContainer>

      <DeliveryDetailContainer>
        <P>Notes: {`${deliveryNote}`}</P>
        <Link href="/checkout/delivery-notes">Edit</Link>
      </DeliveryDetailContainer>

      <Button handleClick={handleClick}>Proceed to Payment</Button>
    </div>
  );
}

export default DeliveryDetails;
