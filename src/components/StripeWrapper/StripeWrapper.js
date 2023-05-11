import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("PUBLIC_KEY");

function StripeWrapper({ children }) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}

export default StripeWrapper;
