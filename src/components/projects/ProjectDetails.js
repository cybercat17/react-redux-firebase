import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';

function ProjectDetails(props) {
  const { project, auth } = props;
  if(!auth.uid) {
    return <Redirect to="/signin" />
  }
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{ project.title }</span>
            <p>{ project.content }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div className="author">Created by { project.authorFirstName } { project.authorLastName }</div>
            <div className="date">{ moment(project.createdAt.toDate()).calendar() }</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading projects...</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project : project,
    auth : state.firebase.auth
  };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection : 'projects' }
  ])
)(ProjectDetails);
