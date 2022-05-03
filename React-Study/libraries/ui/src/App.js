import "./App.css";
// // Webpack CSS import
// import "onsenui/css/onsenui.css";
// import "onsenui/css/onsen-css-components.css";
// import logo from "./logo.svg";
// import OnsenUIExample from "./components/OnsenUI/OnsenUIExample";
// import ButtonExample from "./components/OnsenUI/ButtonExample";
// import { Page } from "react-onsenui";
// import ActionSheetExample from "./components/OnsenUI/ActionSheetExample";
// import AntDesign from "./components/AntDesign/AntDesign";
// import IconExample from "./components/AntDesign/IconExample";
// import TypographyExample from "./components/AntDesign/TypographyExample";
// import LayoutExample from "./components/AntDesign/LayoutExample";
// import FormExample from "./components/AntDesign/FormExample";

// import "semantic-ui-css/semantic.min.css";
import ReactSemanticUIExample from "./components/ReactSemanticUI/ReactSemanticUIExample";

// onsenui -> 학습 하는 중에 원인 모를 에러가 계속해서 발생, 호환성 맞춰서 재시도 해 봤지만 소용없음
// React에 대한 지원이 빈약한 라이브러리라고 생각되어(그리고 하루종일 삽질하다 혈압올라서) pass, 모바일 특화
// ant design -> 깔끔하고 레퍼런스가 잘 되어있어 사용 편함
function App() {
  return (
    <>
      <ReactSemanticUIExample />
      {/* <FormExample /> */}
      {/* <LayoutExample /> */}
      {/* <TypographyExample />
      <IconExample />
      <AntDesign /> */}
      {/* <Page>
        <OnsenUIExample />
        <ButtonExample />
        <ActionSheetExample />
      </Page> */}
    </>
  );
}

export default App;
