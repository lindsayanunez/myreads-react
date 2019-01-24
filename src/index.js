import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import "./index.css";

ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById("root")
);


// Resources Used
// Starter Code from Udacity Front-End Nanodegree - https://github.com/udacity/reactnd-project-myreads-starter)
// Doug Brown's Video Tutorial Part 1 - https://www.youtube.com/watch?v=OcL7-7cRpkQ&feature=youtu.be)