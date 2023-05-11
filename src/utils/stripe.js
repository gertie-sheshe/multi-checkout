export const createPaymentMethod = async (stripe) => {
  try {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
    });

    if (error) {
      console.log("Payment method creation error");
      return { error: true };
    }

    return { paymentMethod };
  } catch (error) {
    console.log("Error creating payment method");
    return { error: true };
  }
};
