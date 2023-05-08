import React, { useState } from "react";
import Link from "next/link";
import Page from "@checkout/layout/Page";
import Meta from "@checkout/layout/Meta";

function DeliveryAddress() {
  const [num, setNumber] = useState(0);

  const handleState = () => {
    setNumber(num + 1);
  };

  return (
    <Page>
      <Meta title="Delivery Address Form" description="" />
      <div>Delivery Address</div>
      <p>{num}</p>
      <button onClick={handleState}>Set State</button>
      <Link href="/checkout/email">Previous</Link>
      <Link href="/checkout/delivery-options">Continue</Link>
    </Page>
  );
}

export default DeliveryAddress;
