 import React from 'react';
import { contact, social } from '../portfolioData'

 
 function Resume (){
     return(
         <>
        <h3>Resume</h3>
         <div>
        {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
        </div>
        </>
     )
 };

 export default Resume;