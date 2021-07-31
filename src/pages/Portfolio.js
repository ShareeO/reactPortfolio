import React from "react";
import projects from "../assets/js/projects";
import Project from "../components/Project";

function Portfolio (props) {
    return (
        <main>
            <h1>Portfolio</h1>

            {/* Listing Projects */}
            <section>
            {projects.map((project,i) => {
                return <Project key ={i} project={project}/>
            })}

            </section>
        </main>
    )
};

export default Portfolio;