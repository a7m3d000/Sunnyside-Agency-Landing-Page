/***** Basics *****/
import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
/***** Libs & Frameworks *****/
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

/***** App *****/
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

AOS.init();

AOS.init({ disable: "mobile" });
