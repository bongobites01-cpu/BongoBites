import React from "react";

function Button({ btn, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {btn}
    </button>
  );
}

export default Button;
