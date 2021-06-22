 import React from 'react';
import { social } from '../portfolioData'

 
 function Resume (){
     return(
         <div className="calcHeight">
        <h3 data-aos="zoom-in-up" >Resume</h3>
         <div data-aos="zoom-in-up" >
        {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
        </div>
        </div>
     )
 };

 export default Resume;