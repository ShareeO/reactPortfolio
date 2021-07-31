import React from "react";
import profile from "../assets/images/MEH.jpeg"

function AboutMe (props) {
    return (
        <main>
            <h1> About Me</h1>
            <section>
                <img src={profile}/>
            </section>

            <section className="about-text">
            <p> Sharee Osborn located in Bastrop, Texas. Recent Graduate from UTAustin Full-Stack Developemenet Boot Camp.</p>
            <p> Plan to find a job as a developer on a team to further my skills.</p>
            </section>
        </main>
    )
};

export default AboutMe;