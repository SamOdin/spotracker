import React, {Component} from 'react';
import {Navigator, Text} from 'react-native';

import Compass from '../screens/Compass';
import Map from '../screens/Map';
import Login from '../screens/Login';
import TabsScreen from '../screens/Tabs';

class AppNavigator extends Component{
    _renderScene(route, navigator){
        let globalNavigatorProps = {navigator};
        switch (route.ident){
            case 'compass':
                return(
                    <Compass {...globalNavigatorProps} />
                );
            case 'tabs':
                return(
                    <TabsScreen {...globalNavigatorProps} />
                );
            case 'login':
                return(
                    <Login {...globalNavigatorProps} />
                );
            case 'map':
                return(
                    <Map {...globalNavigatorProps} />
                );
            default:
                return(
                    <Text>
                        {`YO YOU MESSED SOMETHING UP ${route}`}
                    </Text>
                )
        }
    }

    render(){
        return(
            <Navigator
                initialRoute={this.props.initialRoute}
                ref="AppNavigator"
                renderScene={this._renderScene}
                configureScene={(route) => ({
                    ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} />
        )
    }
}

module.exports = AppNavigator;