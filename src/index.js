import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import App from "./App";
import './index.css';
import {Provider} from "react-redux";

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <Provider store={store}>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </Provider>,
        document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    rerenderEntireTree(store.getState());
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
