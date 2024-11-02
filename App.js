import React from "react";
import ReactDOM from 'react-dom/client';

const heading=
React.createElement('h1',{id:"heading"},"Namaste react Koii");
console.log(heading)

const jsxElement=<h1 id="heading">Namaste react use in jsx</h1>;

console.log(jsxElement)
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxElement);