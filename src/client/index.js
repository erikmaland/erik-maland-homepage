import React from "react";
import ReactDOM from "react-dom";

let element = React.createElement(
    'div', {}, 'Erik Målands Homepage'
);
const wrapper = document.getElementById("root");
ReactDOM.render(
    element,
    wrapper,
    () => {}
);