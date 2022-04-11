import React from "react";
import PropTypes from "prop-types";

const PropsComponent = (props) => {
  return <div>{props.name}</div>;
};

PropsComponent.defaultProps = {
  name: "Baek",
  age: 26,
};

PropsComponent.propTypes = {
  name: PropTypes.string,
  age: function (props, propName, componentName) {
    if (!/26/.test(props[propName])) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed."
      );
    }
  },
};

export default function Component() {
  return (
    <div>
      <PropsComponent />
    </div>
  );
}
