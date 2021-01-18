import React from 'react';
import { connect } from 'react-redux';
import {authorizeUser} from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.authorizeUser();
  }

  render() {
    return <Header 
      login={this.props.login}
      isAuth={this.props.isAuth}
    />
  }

}

const mapStateToProps = (state) => {
  const {login, isAuth} = state.auth;
  return {login, isAuth};
}

export default connect(mapStateToProps, {authorizeUser})(HeaderContainer);