import React from "react";
import { Link } from "react-router-dom";

const NotFound = (props) => (
    <div className="not-found">
        <title>{document.title = props.title}</title>
        <h2>404</h2>
        <p>Page Not Found.</p>
        <Link to='/'>Home</Link>   
    </div>
);

export default NotFound;