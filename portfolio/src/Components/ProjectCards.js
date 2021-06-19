import React from 'react'

const Project = ({id, name, url, skills, imgurl}) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-4 project-card" >
            <div className="image-project">
                <img src={imgurl} alt="project" style={{width:"300px",height:"200px", padding:"10px"}}/>
            </div>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2 style={{color:"var(--persian-green)"}} >{name}</h2></a>
            { skills && <h5>{skills.map(skill => skill)}</h5> }
        </div>
    )

}

export default Project;