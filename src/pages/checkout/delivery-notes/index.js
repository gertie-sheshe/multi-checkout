import React from "react";
import Page from "@checkout/layout/Page";
import Meta from "@checkout/layout/Meta";
import DeliveryNotesForm from "@checkout/components/DeliveryNotesForm";

function DeliveryNotes() {
  return (
    <Page>
      <Meta title="Delivery Notes Form" description="" />
      <h1>Delivery Notes</h1>
      <DeliveryNotesForm />
    </Page>
  );
}

export default DeliveryNotes;
