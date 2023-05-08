import React from "react";
import Page from "@checkout/layout/Page";
import Meta from "@checkout/layout/Meta";
import EmailForm from "@checkout/components/EmailForm";

function Email() {
  return (
    <Page>
      <Meta title="Email Form" description="" />
      <h1>Email Details</h1>
      <EmailForm />
    </Page>
  );
}

export default Email;
