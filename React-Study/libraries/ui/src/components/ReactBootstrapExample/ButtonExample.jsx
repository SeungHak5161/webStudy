import React from "react";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";

export default function ButtonExample() {
  return (
    <>
      <ButtonGroup as={"div"} title="test" id="test-button-group">
        <Button>first</Button>
        <Button>second</Button>
        <Button>third</Button>
      </ButtonGroup>
    </>
  );
}
