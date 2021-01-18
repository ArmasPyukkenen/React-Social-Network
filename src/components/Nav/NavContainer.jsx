import React from 'react';
import { connect } from "react-redux";
import Nav from "./Nav";

class NavContainer extends React.Component {

  render() {
    return <Nav 
      isAuth={this.props.isAuth}
      userId={this.props.userId}
    />
  }
}

const mapStateToProps = (state) => {
  const {isAuth, userId} = state.auth;
  return {isAuth, userId}
}

export default connect(mapStateToProps, null)(NavContainer);