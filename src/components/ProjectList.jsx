import React from 'react'
import Project from './Project'

const ProjectList = ({projects}) => {
    const {name, description, category} = projects
    
  
    return(
       <div >
         {projects.map (project => (
            <Project key={name}
                    project={project}
                    description={description}
                    category={category} />
         ))}
       </div>
    );
};

export default ProjectList;