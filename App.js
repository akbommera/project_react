import React from "react";
import ReactDOM from "react-dom/client";

// const header = React.createElement('h1', {id: "header"}, "Hello React!");
// const parent = React.createElement('div', {}, [React.createElement('h1', {}, "Parent"), React.createElement('div', {}, React.createElement('h1', {}, "CHild"))])
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render([header, parent])

// JSX is HTML like syntax - Not html in javascript
const jsxHeading = <h1>Hello React! App</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);
 