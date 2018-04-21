import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './src/commom';
import LoginForm from './src/LoginForm/LoginForm';

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
        return (
            <View>
                <Header headerText="Authentication"/>
                { this.renderContent() }
            </View>
        );
    }
}

export default App;
