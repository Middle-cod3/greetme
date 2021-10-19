import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let date = new Date();
let hour = date.getHours();

let greeting = "";
// Its a inline CSS
let cssStyle={};

if (hour >= 5 && hour < 12) {
  greeting = "Good Moring..!";
  cssStyle.color="Green";
} else if (hour >= 12 && hour < 14) {
  greeting = "Good Afternoon..!";
  cssStyle.color="#e0c73a";

} else if (hour >= 14 && hour < 18) {
  greeting = "Good Noon..!";
  cssStyle.color="#f2b527";

} else if (hour >= 18 && hour < 20) {
  greeting = "Good Evening..!";
  cssStyle.color="#adb4f0";

}

ReactDOM.render(
  <div>
  <h1 className="heading">
    Hi Ayan, <span style={cssStyle}>{greeting}</span>
  </h1>
  
  </div>,

  document.getElementById("root")
);
