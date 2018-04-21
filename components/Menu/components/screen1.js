import React, { Component } from 'react';
import {View, Text,Image} from 'react-native';

class Screen1 extends Component {
    static navigationOptions = {
    drawerIcon:(
      <Image
        source={require('../../images/home1.png')}
        style={{
    width: 24,
    height: 24,
  }}
/>)}
    render() {
        return (
            <View>
                <Text>home</Text>
            </View>
        );
    }
}

export default Screen1;

