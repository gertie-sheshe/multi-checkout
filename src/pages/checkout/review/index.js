import React from "react";
import Page from "@checkout/layout/Page";
import Meta from "@checkout/layout/Meta";
import OrderSummary from "@checkout/components/OrderSummary";
import DeliveryDetails from "@checkout/components/DeliveryDetails";

function Review() {
  return (
    <Page>
      <Meta title="Review Form Details" description="" />
      <h1>Review Order Details</h1>
      <div>
        <OrderSummary />
        <DeliveryDetails />
      </div>
    </Page>
  );
}

export default Review;
