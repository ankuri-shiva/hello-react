import React from "react"
import ReactDOM  from "react-dom/client";

const parent = React.createElement("div", {id : "parent"} , [
    React.createElement("div", {id : "child"}, [
        React.createElement("h1", {id : "heading"}, "This is react"),
    React.createElement("h2", {id : "heading1"}, "Iam an h2 tag")
    ]),
    React.createElement("div", {id : "child1"}, [
        React.createElement("h1", {}, "Iam an h1 tag"),
    React.createElement("h2", {}, "Iam an h2 tag")
    ])
]);


const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(parent); 