import React from "react";
import Cards from "./components/cards";
import Identifier from "./components/identifier";

export default function Identity() {
  return (
    <React.Fragment>
      <Identifier />
      <Cards />
    </React.Fragment>
  );
}
