import { create } from "zustand";

const useCheckoutStore = create(() => ({
  deliveryDetails: {
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  },
  updateCheckoutData: (newCheckoutData) =>
    set((state) => ({
      deliveryDetails: {
        ...state.deliveryDetails,
        ...newCheckoutData,
      },
    })),
}));

export default useCheckoutStore;
