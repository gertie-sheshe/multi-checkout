import React from "react";

import Page from "@checkout/layout/Page";
import Meta from "@checkout/layout/Meta";
import ContactForm from "@checkout/components/ContactForm";

function Phone() {
  return (
    <Page>
      <Meta title="Phone Details Form" description="" />
      <h1>Mobile Number Details</h1>
      <ContactForm />
    </Page>
  );
}

export default Phone;
