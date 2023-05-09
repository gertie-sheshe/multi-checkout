import React from "react";
import Page from "@checkout/layout/Page";
import Meta from "@checkout/layout/Meta";

import DeliveryOptionsForm from "@checkout/components/DeliveryOptionsForm";

function DeliveryOptions() {
  return (
    <Page>
      <Meta title="Delivery Options Form" description="" />
      <h1>Delivery Preferences</h1>
      <DeliveryOptionsForm />
    </Page>
  );
}

export default DeliveryOptions;
