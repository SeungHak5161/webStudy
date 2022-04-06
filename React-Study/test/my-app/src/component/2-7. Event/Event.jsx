import React from "react";

// capturing은 자식 컴포넌트의 호출을 확인함(자식보다 부모가 먼저 인지)
// bubbling은 captureing 이후 호출된 event가 완료되고 호출됨
export default function Event() {
  const handleButtonClick = (e) => {
    console.dir(e);
    console.log("handleButtonClick");
  };
  const handleClickCapture = () => {
    console.log("handleClickCapture");
  };
  const handleClickCapture2 = () => {
    console.log("handleClickCapture2");
  };
  const handleClickBubble = () => {
    console.log("handleClickBubble");
  };
  const handleMouseLeave = (e) => {
    console.dir(e);
    console.log("handleMouseLeave");
  };
  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>
          Button
        </button>
      </div>
    </div>
  );
}
