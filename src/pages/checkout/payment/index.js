import React from "react";
import Page from "@checkout/layout/Page";
import Meta from "@checkout/layout/Meta";
import PaymentForm from "@checkout/components/PaymentForm";

function Payment() {
  return (
    <Page>
      <Meta title="Payment Form" description="" />
      <h1>Payment</h1>
      <PaymentForm />
    </Page>
  );
}

export default Payment;
