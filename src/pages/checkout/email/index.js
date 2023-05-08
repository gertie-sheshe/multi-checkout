import React, { useState } from "react";
import Link from "next/link";
import Page from "@checkout/layout/Page";
import Meta from "@checkout/layout/Meta";

function Email() {
  const [num, setNumber] = useState(0);

  const handleState = () => {
    setNumber(num + 1);
  };

  return (
    <Page>
      <Meta title="Email Form" description="" />
      <div>Email</div>
      <p>{num}</p>
      <button onClick={handleState}>Set State</button>
      <Link href="/checkout/delivery-address">Continue</Link>
    </Page>
  );
}

export default Email;
