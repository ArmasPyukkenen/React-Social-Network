import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {getUserProfile} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

  componentDidMount() {
    if(this.props.match.params.userId)
      this.props.getUserProfile(this.props.match.params.userId)
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

export default connect(mapStateToProps, {getUserProfile})(ProfileContainerWithRouter)