import React, { useState } from "react";
import Link from "next/link";
import Page from "@checkout/layout/Page";
import Meta from "@checkout/layout/Meta";

import useCheckoutStore from "@checkout/store/checkout";

function Email() {
  const [email, setEmail] = useState("");
  const updateDeliveryDetails = useCheckoutStore(
    (state) => state.updateDeliveryDetails
  );

  const handleChange = (event) => {
    const email = event.target.value;
    console.log(email);
    setEmail(email);
    updateDeliveryDetails({
      email,
    });
  };

  return (
    <Page>
      <Meta title="Email Form" description="" />
      <h1>Email Details</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" value={email} onChange={handleChange} />
      </form>
      {/* <div>Email</div>
      <p>{num}</p>
      <button onClick={handleState}>Set State</button>
      <Link href="/checkout/delivery-address">Continue</Link> */}
    </Page>
  );
}

export default Email;
