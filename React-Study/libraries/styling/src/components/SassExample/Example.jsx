import React from "react";
import "./Example.scss";

export default function Example() {
  return (
    <>
      <div className="body">
        <div className="container">
          <article role={"main"}>main</article>
          <aside role={"complementary"}>complementary</aside>
        </div>
        <div className="inverse">inverse</div>
      </div>
      <div className="info">info</div>
      <p className="alert">alert</p>
      <a href="javascript(0)" className="success">
        success
      </a>
      <br />
      <div className="successExtend"> success</div>
      <div className="errorExtend"> error</div>
      <br />
      <div className="sidebar">error test</div>
      <div className="gray">gray scale</div>
      <div className="pulse">pulse</div>
      <div className="bounce"></div>
    </>
  );
}
