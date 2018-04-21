import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './src/commom';
import LoginForm from './src/LoginForm/LoginForm';
import Router from './src/Router';

class App extends Component {
    state = { loggedIn: null };

    componentDidMount() {

    }

    renderContent() {
        // switch (this.state.loggedIn) {
        //   case true:
        //     return (
        //       <Button onPress={}>
        //         Log Out
        //       </Button>
        //     );
        //   case false:
        //     return <LoginForm />;
        //   default:
        //     return <Spinner size="large" />;
        // }
        return <LoginForm/>
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
            <Router />
            </Provider>
        );
    }
}

export default App;
