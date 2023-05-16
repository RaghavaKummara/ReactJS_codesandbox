// var React = require("react");
// var ReactDom = require("react-dom");
import React from "react";
import ReactDom from "react-dom";
//ReactDom.render(WHAT TO show,WHERE TO SHOW IT);

//notice this without any using tags we are writing plan html that is h1 in javascript

//h1 is picked by compiler[Babel] which is coming from var React and converts into javascript code
ReactDom.render(<h1>Hello Raghava</h1>, document.getElementById("root"));

//without react writing same code
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello Raghava";
// document.getElementById("root").appendChild(h1);

//render will accept only single html tag so if want multiple tags to use wrap into div it makes singlw html component
ReactDom.render(
  <div>
    <h1>this is heading</h1>
    <p>paragraph</p>
  </div>,
  document.getElementById("root")
);
