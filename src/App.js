import React from 'react';
import './normalize.css';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import NewsFeed from './components/NewsFeed/NewsFeed';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return ( 
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Nav />
                <main className="app-wrapper-content">
                    <Route path="/profile"
                            render={ () => <Profile/>}
                    />
                    <Route path="/dialogs"
                            render={ () => <DialogsContainer/>}
                    />
                    <Route path="/news" component={NewsFeed}/>
                    <Route path="/users"
                            render={ () => <UsersContainer/>}
                    />

                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
