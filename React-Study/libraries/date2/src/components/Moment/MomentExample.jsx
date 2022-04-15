import React from "react";
import moment from "moment";

export default function MomentExample() {
  const momentDate = moment();
  const newMomentDate = momentDate.add(1, "week");
  return (
    <div>
      <h1>Moment</h1>
      <div>Immutable Check</div>
    </div>
  );
}
