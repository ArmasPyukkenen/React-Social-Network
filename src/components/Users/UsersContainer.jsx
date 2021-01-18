import React from 'react';
import {getUsers, changeFollowingStatus} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";

class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }

    handleSetCurrentPage = (currentPage) => {
        this.props.getUsers(currentPage, this.props.usersPage.pageSize)
    }

    handleFollowing = (userId, currentFollowStatus) => {
        this.props.changeFollowingStatus(userId, !currentFollowStatus)
    }

    render() {
        return (
        <Users
            users={this.props.usersPage.users}
            pageCount={this.props.usersPage.pageCount}
            currentPage={this.props.usersPage.currentPage}
            isFetching={this.props.usersPage.isFetching}
            blockedButtons={this.props.usersPage.blockedButtons}
            handleFollowing={this.handleFollowing}
            handleSetCurrentPage={this.handleSetCurrentPage}
        />
        )
    };
};

const mapStateToProps = (state) => ({
    usersPage: state.usersPage
});

export default connect(mapStateToProps, {getUsers, changeFollowingStatus})(UsersContainer);