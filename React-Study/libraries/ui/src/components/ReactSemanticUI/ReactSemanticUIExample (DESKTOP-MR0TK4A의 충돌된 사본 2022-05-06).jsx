import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import ButtonExampleLabeledBasic from "./ButtonExampleLabeledBasic";

export default function ReactSemanticUIExample() {
  return (
    <>
      <div>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <ButtonExampleLabeledBasic />
      </div>
    </>
  );
}
