import React from 'react'
import Project from './Project'

const ProjectList = ({projects}) => {
    const {title, description} = projects
    
    return(
       <div >
         {projects.map (project => (
            <Project key={title}
                    project={project}
                    description={description} />
         ))}
       </div>
    );
};

export default ProjectList;