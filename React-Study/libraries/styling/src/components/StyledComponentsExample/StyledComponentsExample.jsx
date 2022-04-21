import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

// .defaultProps : 말 그대로 기본값 지정가능
Button.defaultProps = {
  theme: { main: "palevioletred" },
};

const defaultTheme = {
  main: "palevioletred",
};

const greenTheme = {
  main: "mediumseagreen",
};

// createGlobalStyle 전역에 적용해야 할 속성 지정, html 전체에 적용됨
const GlobalStyle = createGlobalStyle`
  button{
    background-color: pink;
  }
`;

export default function StyledComponentsExample() {
  const [theme, setTheme] = useState(greenTheme);

  const handleTheme = (e) => {
    setTheme(e);
    console.log(theme);
  };

  return (
    <>
      <div>
        <GlobalStyle />
        <button onClick={() => handleTheme(defaultTheme)}>red</button>
        <button onClick={() => handleTheme(greenTheme)}>green</button>

        <Button>Normal</Button>

        {/* <ThemeProvider/> : context.provider처럼 동작함 */}
        <ThemeProvider theme={theme}>
          <Button>Themed</Button>
        </ThemeProvider>
      </div>
      <div>
        <button>Is GlobalStyle influence outter area?</button>
      </div>
    </>
  );
}
