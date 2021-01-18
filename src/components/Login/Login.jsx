import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  render() {
    return <h1>{this.props.isAuth ? "You are successfuly logged in!" : "Please Log In!"}</h1>
  }
}

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth})

export default connect(mapStateToProps, null)(Login);