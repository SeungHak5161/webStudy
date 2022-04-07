import React from "react";
import { createPortal } from "react-dom";
import ThankyouDialog from "../2-11. Composition/ThankyouDialog";

const Portal = (props) => {
  return createPortal(props.children, document.getElementById("portal"));
};

export default function Example2() {
  return (
    // 바로 아래 <div>는 root에 포함되어 있지만 portal에 포함된 버튼을 클릭해도
    // onClick 이벤트가 발생함 -> react가 의도적으로 반응하도록 한거임
    <div onClick={() => console.log("cliked")}>
      {/* 홀롤로 버튼이 <ThankyouDialog>보다 아래에 있지만 가려짐,
      Portal을 이용함으로써 index.html 상에서 <div id="root">보다
      <div id="portal">이 아래에 있기 때문 */}
      <Portal>
        <ThankyouDialog />
      </Portal>
      <div style={{ position: "absolute" }}>
        <button>홀로롤ㄹ로</button>
      </div>
    </div>
  );
}
