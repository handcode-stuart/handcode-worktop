import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import projectsData from "./data";

ReactDOM.render(<App projects={projectsData} />, document.querySelector("#root"));
