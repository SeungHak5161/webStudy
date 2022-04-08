import React, { setState } from "react";

export default function MouseMove() {
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
    </div>
  );
}
