import React from "react";


function Navigation (props) {
    const onPageChange = props.onPageChange
    return (
        <nav>
            <ul className="topnav">
                <li onClick={() => onPageChange('about')}><a> About Me </a></li>
                <li onClick={() => onPageChange('contact')}><a> Contact </a></li>
                <li onClick={() => onPageChange('portfolio')}><a> Portfolio </a></li>
                <li onClick={() => onPageChange('resume')}><a> Resume </a></li>
            </ul>

        </nav>

    )
};

export default Navigation;