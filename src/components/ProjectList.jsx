import React from 'react'
import Project from './Project'

const ProjectList = ({projects}) => {
    const {name, description} = projects
    
    return(
       <div >
         {projects.map (project => (
            <Project key={name}
                    project={project}
                    description={description} />
         ))}
       </div>
    );
};

export default ProjectList;