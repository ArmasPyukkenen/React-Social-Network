import React from 'react';
import { connect } from 'react-redux';
import {authorizeUser} from '../../redux/auth-reducer';
import Header from './Header';
import * as axios from 'axios';

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
    .then( res => {
      if(res.data.resultCode === 0) {
        this.props.authorizeUser(res.data.data);
      }
    })
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