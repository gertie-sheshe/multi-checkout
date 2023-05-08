import React from "react";
import { Main } from "./Page.styles";

function Page({ children }) {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
}

export default Page;
