import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class SplashScreen extends React.Component {
    componentWillReceiveProps(nextProps) {
        const {navigate} = this.props.navigation;
        setTimeout(() => {
            navigate('home');
        }, 1500);
    }
    componentDidMount() {
        const {navigate} = this.props.navigation;
        setTimeout(() => {
            navigate('home');
        }, 1500);
    }
    render() {
        return (
            <View style={ styles.container }>
              <Image source={ require('../images/logonike.png') } style={ styles.logo } />
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 36,
    }
});

export default SplashScreen;