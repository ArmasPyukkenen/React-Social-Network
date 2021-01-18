import React from 'react';
import { connect } from "react-redux";
import Nav from "./Nav";

class NavContainer extends React.Component {

  render() {
    return <Nav 
      userId={this.props.userId}
    />
  }
}

const mapStateToProps = (state) => {
  return {userId : state.auth.userId}
}

export default connect(mapStateToProps, null)(NavContainer);