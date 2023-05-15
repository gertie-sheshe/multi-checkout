import React from "react";
import Link from "next/link";
import useCheckoutStore from "@checkout/store/checkout";

import { DeliveryDetailContainer, P } from "./DeliveryDetailsStyles";

function UserDetails() {
  const deliveryDetails = useCheckoutStore((state) => state.deliveryDetails);

  if (!deliveryDetails) return;

  const { email, phoneNumber, addressLine1, deliveryOption, deliveryNote } =
    deliveryDetails;

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
    </div>
  );
}

export default UserDetails;
