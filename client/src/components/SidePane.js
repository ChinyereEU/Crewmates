import React from "react";
import { Link } from "react-router-dom";
import './SidePane.css';

const SidePane = () => {
    return (
        <div className="SidePane">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-deisgner">Add a Designer</Link></li>
                <li><Link to="/deisgner-gallery">Designer Gallery</Link></li>
            </ul>
        </div>
    );
};

export default SidePane;