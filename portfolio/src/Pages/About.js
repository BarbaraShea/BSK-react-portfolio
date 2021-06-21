import React from 'react';
import { skills } from '../portfolioData';
import Skills from '../Components/Skills'


function About(){
    return(
        <>
        <div className="About calcHeight" data-aos="zoom-in-up" data-aos-once="true" >
           <h3>About Me</h3>
                <img src="/assets/profile.jpg" alt="Profile" style={{width:"300px",height:"200px", padding:"10px"}}/>
                <h4> Full-stack web developer leveraging a background in education to provide unique perspectives on how end-users interact with websites and software platforms, especially in the EdTech industry. Earned a certificate in Full Stack Web Development from the University of North Carolina-Chapel Hill Coding Boot Camp and a Master's degree in Education from Arizona State University. Innovative and detail orientated problem-solver with strengths in creativite collaboration and building projects from ideation to execution.</h4>
        </div>
          <div id="Skills"> 
                <div className="row d-flex justify-content-center skills">
                    {skills.map((x) => 
                        <Skills faClass={x.faClass} label={x.name}/>
                    )}
                </div> 
            </div>
        </> 
    )
};

export default About;