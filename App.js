import React from "react"
import ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX  => transfiles it to => React.createElement => React Element => Js object => Html Element(render)

const Heading = () => <h1 id="heading">Hello React</h1>

const number = 10949;

const HeadingComponent = () => (
    <div>
        <Heading />
        {number}
        <Heading></Heading>
        {Heading()}
        <h1 className="heading">Namaste React Functional Component</h1>
        {19 + 13}
    </div>

)

root.render(<HeadingComponent />);