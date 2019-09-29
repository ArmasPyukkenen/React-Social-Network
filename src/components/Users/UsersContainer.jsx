import {followUserAC, unfollowUserAC} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => ({
    usersPage: state.usersPage
});

const mapDispatchToProps = (dispatch) => ({
   followUser: (userId) => dispatch(followUserAC(userId)),
   unfollowUser: (userId) => dispatch(unfollowUserAC(userId))
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;