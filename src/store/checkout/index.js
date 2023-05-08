import { create } from "zustand";

const useCheckoutStore = create((set) => ({
  deliveryDetails: {
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  },
  updateDeliveryDetails: (newDeliveryDetails) =>
    set((state) => ({
      deliveryDetails: {
        ...state.deliveryDetails,
        ...newDeliveryDetails,
      },
    })),
}));

export default useCheckoutStore;
