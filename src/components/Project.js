import React from "react";
import projects from "../assets/js/projects";

function Project (props) {
    const {project} = props;
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <div className="img-box">
            <img src={project.image}/>
            </div>

            <a href={project.github}>github</a>
            <a>demo</a>
        </div>
    )
};

export default Project;