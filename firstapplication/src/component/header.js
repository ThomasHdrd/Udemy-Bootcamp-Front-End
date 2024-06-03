import React from "react";
import '../counter.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className = "main-header">
            <ul>
                <link to ="/">
                  <li>Home</li>
                </link>
                <link to="/about">
                  <li>About</li>
                </link>
            </ul>
        </div>
    )
}
export default Header;