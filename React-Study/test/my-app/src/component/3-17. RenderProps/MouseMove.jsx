import React, { setState } from "react";

const Cat = (mouseLoc) => {
  const mouse = mouseLoc.mouseLoc;
  return (
    <img
      src="./cat.png"
      alt="mouse"
      style={{
        position: "absolute",
        left: mouse.x - 4,
        top: mouse.y - 3,
        height: 30,
        width: 30,
      }}
    />
  );
};

const MouseMove = (props) => {
  const [mouseLoc, setMouseLoc] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMouseLoc({ x: e.pageX, y: e.pageY });
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      <h1>Move mouse!</h1>
      <p>
        Current Positions is {mouseLoc.x}, {mouseLoc.y}
      </p>
      {props.render(mouseLoc)}
    </div>
  );
};

// 캡슐화
export default function MouseTracker() {
  return (
    <>
      {/* render 함수를 이용해 mouseLoc을 받아서 Cat에 mouseLoc를 넘겨줌 */}
      <MouseMove render={(mouseLoc) => <Cat mouseLoc={mouseLoc} />} />
    </>
  );
}
