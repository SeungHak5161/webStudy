import React from "react";
import { Button } from "react-onsenui";

export default function ButtonExample() {
  const handleClick = () => {
    alert("pressed");
  };
  return (
    <>
      <Button onClick={handleClick} modifier="outline">
        outline
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="large--cta">
        large--cta
      </Button>
      <br />
      <br />
      <Button modifier="light">light</Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="large--quiet">
        large--quiet
      </Button>
      <br />
      <br />
      <Button modifier="quiet">quiet</Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="material">
        material
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="material--flat">
        material--flat
      </Button>
      <br />
      <br />
    </>
  );
}
