import React from "react";

function Button(props) {
  return (
    <button
      type="button"
      className="bg-black text-white rounded-4 btn-lg whatWeDoButton shadow-lg"
      onClick={props.onClick}
    >
      <div className="svg-wrapper-1">
        <div className="svg-wrapper">
          <svg height="24" width="24" viewBox="0 0 24 24">
            {props.icon}
          </svg>
        </div>
      </div>
      <span>{props.name}</span>
    </button>
  );
}

export default Button;
