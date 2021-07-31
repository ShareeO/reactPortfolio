import React from "react";
import Navigation from "./Navigation";

function Header (props) {
    const onPageChange = props.onPageChange
    return (
        <header>
            <h2>Sharee</h2>
            <Navigation onPageChange={onPageChange}/>
        </header>

    )
};

export default Header;