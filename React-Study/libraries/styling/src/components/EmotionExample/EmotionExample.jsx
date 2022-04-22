import React from "react";
import { css, cx } from "@emotion/css";
import styled from "styled-components";

export default function EmotionExample() {
  const Button = styled.button`
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `;
  return <Button>This my button component.</Button>;
}
