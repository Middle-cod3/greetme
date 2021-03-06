import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let date = new Date();
let hour = date.getHours();

let greeting = "";
// Its a inline CSS
let cssStyle = {};

if (hour >= 5 && hour < 12) {
  greeting = "Good Moring..!";
  cssStyle.color = "Green";
} else if (hour >= 12 && hour < 14) {
  greeting = "Good Noon..!";
  cssStyle.color = "#e0c73a";
} else if (hour >= 14 && hour < 18) {
  greeting = "Good Afternoon..!";
  cssStyle.color = "#f2b527";
} else if (hour >= 18 && hour < 20) {
  greeting = "Good Evening..!";
  cssStyle.color = "#adb4f0";
} else if (hour >= 20 && hour < 23) {
  greeting = "Good Night..!";
  cssStyle.color = "#394557";
}
let tm = new Date().toLocaleTimeString();


ReactDOM.render(
  <div>
    <h1 className="heading">
      Hi Buddy😍, <span style={cssStyle}>{greeting}🌼</span>
      <span className="tms">{tm}</span>
    </h1>
    
  </div>,

  document.getElementById("root")
);
