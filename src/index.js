import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import AppNavigator from './navigation/AppNavigator';

export default class spotracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ident: "tabs"
        };
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <AppNavigator initialRoute={{ident: this.state.ident}} />
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});