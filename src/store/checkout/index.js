import { create } from "zustand";

const useCheckoutStore = create((set) => ({
  deliveryDetails: {
    name: "",
    email: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    deliveryOption: "Standard",
    deliveryNote: "",
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
