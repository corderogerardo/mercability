// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';

// Make a component
const Logo = ({images}) => {
    const { container, image, text } = styles;

    return (
        <View style={container}>
            <Image source={images} style={image} />
            <Text style={text}>Mercability</Text>
        </View>
    );
};

const styles = {
    container: {
        height:200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
        fontSize: 25
    }
};


// Make the component available to other parts of the app
export { Logo };
