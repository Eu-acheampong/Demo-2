import React from "react";

import "./Nav.css";
const NavigationBar = () => {
    return(
        <div>
        <nav>
            <a href="/"> Address</a>
            <a href="/"> Content</a>
            <a href="/"> Location</a>
            <a href="/"> Name</a>
            <a href="/"> Age</a>
        </nav>
        </div>
    );
}
export default NavigationBar;