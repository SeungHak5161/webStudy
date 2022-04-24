// styling library 다 비슷하고 어렵지도 않아서 그냥 쓸때 레퍼런스 보면 될듯 pass

import React from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
// styled-component와 동일한 방식으로 사용 가능
import styled from "@emotion/styled";

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

  const color = "white";

  const style = css`
    color: hotpink;
  `;

  const SomeComponent = ({ children }) => (
    <div css={style}>
      Some hotpink text.
      {children}
    </div>
  );

  const anotherStyle = css({
    textDecoration: "underline",
  });

  const AnotherComponent = () => (
    <div css={anotherStyle}>Some text with an underline.</div>
  );

  return (
    <>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      <br />
      <Button>This my button component.</Button>

      <SomeComponent>
        <AnotherComponent />
      </SomeComponent>
      <AnotherComponent />
    </>
  );
}
