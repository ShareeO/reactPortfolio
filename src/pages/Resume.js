import React from "react";


function Resume (props) {
    return (
        <main>
            <h1>Resume</h1>
            <p><a href="https://www.linkedin.com/in/sharee-osborn-133494139/">See My Resume</a></p>

{/* Front End */}
            <section>
                <h4>Front End Proficincies</h4>
                <ul>
                    <li> HTML </li>
                    <li> CSS</li>
                    <li> JavaScript</li>
                    <li> React</li>
                </ul>

            </section>
{/* Back end */}
            <section>
                <h4>Back End Proficincies</h4>
                <ul>
                <li>Express</li>
                <li>SQL</li>
                <li>MVC</li>
                <li>NoSQL</li>
                <li>GraphQL </li>
                </ul>

            </section>
        </main>
    )
};

export default Resume;