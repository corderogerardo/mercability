import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import { View } from 'react-native';

import { Header, Button, Spinner } from './src/commom';
import LoginForm from './src/LoginForm/LoginForm';
import Router from './src/Router';

class App extends Component {
    state = { loggedIn: null };

    componentDidMount() {
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={ store }>
                <Router/>
            </Provider>
        );
    }
}

export default App;
