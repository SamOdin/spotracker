import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

import ViewContainer from '../components/ViewContainer';

class Geofence extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ViewContainer>
                <Text style={styles.welcome}>
                    Geofence
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        marginBottom: 5,
    }
});

module.exports = Geofence;