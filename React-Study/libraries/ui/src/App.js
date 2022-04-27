// import "./App.css";
// Webpack CSS import
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import logo from "./logo.svg";
import OnsenUIExample from "./components/OnsenUI/OnsenUIExample";
import ButtonExample from "./components/OnsenUI/ButtonExample";
import { Page } from "react-onsenui";
import ActionSheetExample from "./components/OnsenUI/ActionSheetExample";

// 학습 하는 중에 원인 모를 에러가 계속해서 발생, 호환성 맞춰서 재시도 해 봤지만 소용없음
// React에 대한 지원이 빈약한 라이브러리라고 생각되어(그리고 하루종일 삽질하다 혈압올라서) pass
function App() {
  return (
    <>
      <Page>
        {/* <OnsenUIExample />
        <ButtonExample /> */}
        <ActionSheetExample />
      </Page>
    </>
  );
}

export default App;
