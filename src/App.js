import React from 'react';
import './normalize.css';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import HeaderContainer from './components/Header/HeaderContainer';
import NavContainer from './components/Nav/NavContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import NewsFeed from './components/NewsFeed/NewsFeed';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";

const App = () => {
    return ( 
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <NavContainer />
                <main className="app-wrapper-content">
                    <Route path="/profile/:userId?"
                            render={ () => <ProfileContainer/>}
                    />
                    <Route path="/dialogs"
                            render={ () => <DialogsContainer/>}
                    />
                    <Route path="/news" component={NewsFeed}/>
                    <Route path="/users"
                            render={ () => <UsersContainer/>}
                    />
                    <Route path="/login"
                            render={ () => <Login/>}
                    />
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
