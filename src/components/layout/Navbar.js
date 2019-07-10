import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = ({ auth, profile }) => {
  const links = auth.uid ? <SignedInLinks profile={ profile }/> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper blue darken-3 z-depth-0">
      <div className="container">
        <Link to="/" className="brand-logo">Manager</Link>
        { links }
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth : state.firebase.auth,
    profile : state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);