 import React from 'react';
 import ProjectCards from '../Components/ProjectCards';
import { projects } from '../portfolioData';

const Project = () => {
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">Projects</h1>
                    </div>
                </>
                <div className="row">
                {projects && projects.map((x) => 
                <ProjectCards id={x.id} url={x.url} name={x.name} skills={x.skills}/>
                )}
                </div>
            </div>
        </>
    )
}

export default Project;