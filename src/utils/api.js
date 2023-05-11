const STRIPE_URL = "/api/payment";

const apiRequest = async (url, options) => {
  const result = fetch(url, options);

  if (!result.ok) {
    throw new Error(result.error);
  }

  const data = (await result).json();

  return data;
};

export const handleToken = (paymentMethod) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      paymentMethod: paymentMethod.id,
    }),
  };

  return apiRequest(STRIPE_URL, options);
};
