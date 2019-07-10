import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
  render() {
    const { projects, auth } = this.props;
    if(!auth.uid) {
      return <Redirect to="/signin" />
    }
    return (
      <div className="dashboard container section">
        <div className="row">
          <div className="col s12 m8">
            <ProjectList projects={ projects } />
          </div>
          <div className="col s12 m4">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects : state.firestore.ordered.projects,
    auth : state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection : 'projects' }
  ])
)(Dashboard);