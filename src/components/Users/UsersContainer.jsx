import React from 'react';
import * as axios from 'axios';
import {followUser, unfollowUser, setUsers, setCurrentPage, setTotalPageCount, setIsFetching} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";

class UsersContainer extends React.Component{

    componentDidMount() {
        const resultsOnPage = this.props.usersPage.resultsOnPage;
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.usersPage.currentPage}&count=${resultsOnPage}`, {withCredentials: true})
        .then((res) => {
            this.props.setIsFetching(false);
            this.props.setUsers(res.data.items);
            this.props.setTotalPageCount(Math.ceil(res.data.totalCount / resultsOnPage))
        })
    }

    handleSetCurrentPage = (currentPage) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${currentPage}&count=${this.props.usersPage.resultsOnPage}`, {withCredentials: true})
        .then((res) => {
            this.props.setIsFetching(false);
            this.props.setUsers(res.data.items);
        })
    }

    handleFollowing = (userId, followStatus) => {
        if(followStatus) {
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
                withCredentials: true,
                headers: {
                    "API-KEY" : ""
                }
            })
            .then( res => {
                if(res.data.resultCode === 0)
                    this.props.unfollowUser(userId)
            })
        } else {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
                withCredentials: true,
                headers: {
                    "API-KEY" : ""
                }
            })
            .then(res => {
                if(res.data.resultCode === 0)
                    this.props.followUser(userId)
            })
        }
        //return followStatus ? () => this.props.unfollowUser(userId) : () => this.props.followUser(userId);
    }

    render() {
        return (
        <Users
            users={this.props.usersPage.users}
            pageCount={this.props.usersPage.pageCount}
            currentPage={this.props.usersPage.currentPage}
            isFetching={this.props.usersPage.isFetching}
            handleFollowing={this.handleFollowing}
            handleSetCurrentPage={this.handleSetCurrentPage}
        />
        )
    };
};

const mapStateToProps = (state) => ({
    usersPage: state.usersPage
});

export default connect(mapStateToProps, {followUser, unfollowUser, setUsers, setCurrentPage, setTotalPageCount, setIsFetching})(UsersContainer);