export const createPaymentMethod = async (stripe, cardData) => {
  try {
    const { cardNumber, expiryDate, securityNumber } = cardData;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: {
        number: cardNumber,
        exp_month: expiryDate.split("/")[0].trim(),
        exp_year: expiryDate.split("/")[1].trim(),
        cvc: securityNumber,
      },
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
