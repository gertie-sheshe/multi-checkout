import { create } from "zustand";
// import { devtools } from "zustand/middleware";

// const createStore = (devToolsEnabled) => {
//   const middlewares = devToolsEnabled ? [devtools] : [];

//   return create(middlewares, (set, get) => ({
//     deliveryDetails: {
//       name: "",
//       email: "",
//       phoneNumber: "",
//       addressLine1: "",
//       addressLine2: "",
//       deliveryOption: "",
//       city: "",
//       state: "",
//       zip: "",
//       country: "",
//     },
//     updateDeliveryDetails: (newDeliveryDetails) =>
//       set((state) => ({
//         deliveryDetails: {
//           ...state.deliveryDetails,
//           ...newDeliveryDetails,
//         },
//       })),
//   }));
// };

// const useCheckoutStore = createStore(process.env.NODE_ENV === "development");

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
    deliveryOption: "",
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
