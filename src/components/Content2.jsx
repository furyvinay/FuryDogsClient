import React from "react";

function Content2(props) {
  return (
    <div className="col d-flex justify-content-start align-items-start mx-4 my-5">
      <div className="px-1">
        <h2 className="mt-5">{props.title}</h2>
        <p className="mx-3 my-3">{props.content}</p>
      </div>
    </div>
  );
}

export default Content2;
