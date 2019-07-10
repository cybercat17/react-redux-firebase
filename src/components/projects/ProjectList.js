import React from 'react';
import { Link } from 'react-router-dom';

import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  const projectList = projects ? (
    projects.map(project => {
      return (
        <Link to={ "/project/" + project.id } key={ project.id } >
          <ProjectSummary project={ project }/>
        </Link>
      );
    })
  ) : (
    <p>Loading projects...</p>
  );
  return (
    <div className="project-list">
      { projectList }
    </div>
  );
}

export default ProjectList;