import React from "react";

function Heading({ heading, className, span, className2 }) {
  return (
    <h1 className={className}>
      {heading}
      <span className={className2}>{span}</span>
    </h1>
  );
}

export default Heading;
