import { useStripe as useStripeCore } from "@stripe/react-stripe-js";

const useStripe = () => {
  const stripe = useStripeCore();

  return stripe;
};

export default useStripe;
