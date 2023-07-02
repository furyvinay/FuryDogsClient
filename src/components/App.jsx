import React from "react";

import Content1 from "./Content1";
import Content2 from "./Content2";
import divContent2 from "../divContent2";
import WhatWeDo from "./WhatWeDo";
import Content3 from "./Content3";
import Content4 from "./Content4";
import Content5 from "./Content5";
import Content6 from "./Content6";


function createDiv(divContent) {
  return (
    <Content2
      title={divContent.title}
      content={divContent.content}
      key={divContent.id}
    />
  );
}

function App() {
  return (
    <div className="App">
   
      <Content1 />
      <div className="text-center bg-light">
        <div className="row m-0">
          {divContent2.map(createDiv)}
        </div>
      </div>
      <WhatWeDo />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
   
    </div>
  );
}

export default App;
