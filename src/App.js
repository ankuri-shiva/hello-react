import React from "react"
import ReactDOM  from "react-dom/client";

// import Header from "./Header"

import Body from "./components/Body"

import Header from "./components/Header";

const AppLayout = () => {
    return (
        <div className="">
            <Header />
            <hr className="hr-line" />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);