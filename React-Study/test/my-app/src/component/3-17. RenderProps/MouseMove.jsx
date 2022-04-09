import React, { setState } from "react";

const Cat = (mouseLoc) => {
  return (
    <img
      src="./cat.png"
      alt="mouse"
      style={{
        position: "absolute",
        left: mouseLoc.x - 4,
        top: mouseLoc.y - 3,
        height: 30,
        width: 30,
      }}
    />
  );
};

const MouseMove = () => {
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
      <Cat mouseLoc={mouseLoc} />
    </div>
  );
};

// 캡슐화
export default function MouseTracker() {
  return (
    <>
      <MouseMove />
    </>
  );
}
