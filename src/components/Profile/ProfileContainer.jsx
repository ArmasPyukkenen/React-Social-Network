import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

  componentDidMount() {
    if(this.props.match.params.userId)
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
    .then(res => {
      this.props.setUserProfile({ava: res.data.photos.large, fullName: res.data.fullName})
    })
  }


  render() {
    return <Profile 
      avatar={this.props.avatar}
      fullName={this.props.fullName}
    />
  }
}

const mapStateToProps = (state) => {
  const {avatar, fullName} = state.profilePage;
  return {avatar, fullName};
}

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter)