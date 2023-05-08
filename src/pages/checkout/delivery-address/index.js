import React, { useState } from "react";
import Page from "@checkout/layout/Page";
import Meta from "@checkout/layout/Meta";

import DeliveryAddressForm from "@checkout/components/DeliveryAddressForm";

function DeliveryAddress() {
  return (
    <Page>
      <Meta title="Delivery Address Form" description="" />
      <h1>Delivery Address Details</h1>
      <DeliveryAddressForm />
    </Page>
  );
}

export default DeliveryAddress;
