import { connect } from "react-redux";
import { Redirect } from "react-router-dom"
import { compose } from "redux";
import React from 'react';

const withAuthRedirect = (Component) => (props) => {
  if (!props.isAuth) return <Redirect to="/login" />;
  return <Component {...props} />
}

export default (Component) => compose(
  connect((state) => ({isAuth: state.auth.isAuth}), null),
  withAuthRedirect
)(Component);