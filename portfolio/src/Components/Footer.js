import React from 'react';
import { ExternalLink } from 'react-external-link';

function Footer(){
    return(
        <>
        <ul>
                <li >
                <ExternalLink className="text-dark" href="https://www.linkedin.com/in/barbarasheakenny">
                     <h1 class="nav-link" style={{ fontSize: '1rem', fontFamily:"Quicksand", color:"var(--persian-green)"}}><i class="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</h1>
                </ExternalLink>
                </li>
                 <li>
                <ExternalLink className="text-dark" href="https://github.com/BarbaraShea">
                     <h1 class="nav-link" style={{ fontSize: '1rem', fontFamily:"Quicksand", color:"var(--persian-green)"}}><i class="fa fa-github" aria-hidden="true"></i> GitHub</h1>
                </ExternalLink>
                </li>
                 <li>
                <ExternalLink className="text-dark" href="mailto:b.kenny58@gmail.com">
                     <h1 class="nav-link" style={{ fontSize: '1rem', fontFamily:"Quicksand", color:"var(--persian-green)"}}><i class="fa fa-envelope-o" aria-hidden="true"></i> Email</h1>
                </ExternalLink>
                </li>
        </ul>
        </>
    )
};

export default Footer;