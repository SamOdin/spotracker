import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import { Container, Content, Tab, Tabs, Header, Button, Left, Right, Icon, Body, Title } from 'native-base';
import Swiper from 'react-native-swiper';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Drawer from 'react-native-drawer'

import Compass from '../screens/Compass';
import Map from '../screens/Map';
import SwiperScreen from '../screens/Swiper';

class TabsScreen extends Component{
    constructor(props){
        super(props);
    }
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render(){

        return(

        <Drawer ref={(ref) => this._drawer = ref}
                content={<SwiperScreen />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                tweenHandler={(ratio) => ({
                    main: { opacity:(2-ratio)/2 }
                })}>
            <Container>
                <Header hasTabs noShadow={true} style={{
                    backgroundColor: '#FFFFFF'
                }}>
                    <Left>
                        <Button transparent onPress={() => {this._drawer.open()}}>
                            <Icon name='menu' style={{
                                color: '#999999'
                            }} />
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{
                        color: '#999999',
                        paddingLeft: 0,
                        marginLeft: 0
                    }}>Where is my device?</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' style={{
                                color: '#999999'
                            }} />
                        </Button>
                        <Button transparent>
                            <Icon name='menu' style={{
                                color: '#999999'
                            }} />
                        </Button>
                        <Button transparent>
                            <Icon name='menu' style={{
                                color: '#999999'
                            }} />
                        </Button>
                    </Right>
                </Header>

                <Tabs style={{
                    flex: 5
                }}>
                    <Tab heading="PROXIMITY" tabStyle={{
                        backgroundColor: 'transparent',
                        borderWidth: 0
                    }} textStyle={{
                        color: '#d3d3d3',
                        fontSize: 12
                    }} activeTextStyle={{
                        color: '#01B400',
                        fontWeight: '300',
                        letterSpacing: 1,
                        borderBottomColor: '#01B400',
                        fontSize: 13,
                        borderBottomWidth: 1
                    }} activeTabStyle={{backgroundColor: 'transparent'}}>
                        <Compass />
                    </Tab>
                    <Tab heading="MAP" tabStyle={{
                        backgroundColor: 'transparent'
                    }} textStyle={{
                        color: '#d3d3d3',
                        fontSize: 12
                    }} activeTextStyle={{
                        color: '#01B400',
                        fontWeight: '300',
                        letterSpacing: 1,
                        borderBottomColor: '#01B400',
                        fontSize: 13,
                        borderBottomWidth: 1
                    }} activeTabStyle={{backgroundColor: 'transparent'}}>
                        <Map />
                    </Tab>
                    <Tab heading="GEOFENCE" tabStyle={{
                        backgroundColor: 'transparent'
                    }} textStyle={{
                        color: '#d3d3d3',
                        fontSize: 12
                    }} activeTextStyle={{
                        color: '#01B400',
                        fontWeight: '300',
                        letterSpacing: 1,
                        borderBottomColor: '#01B400',
                        fontSize: 13,
                        borderBottomWidth: 1
                    }} activeTabStyle={{backgroundColor: 'transparent'}}>
                        <Map />
                    </Tab>
                </Tabs>
                <Grid style={{
                    flex: 1
                }}>
                    <Swiper height={80} showsPagination={false} showsButtons={true}>
                        <View style={styles.slide1}>
                            <Text style={styles.text}>Swiper0</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>Swiper1</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>Swiper2</Text>
                        </View>
                    </Swiper>
                </Grid>
            </Container>
        </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F5F7'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F5F7',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F5F7',
    },
    text: {
        color: '#d3d3d3',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

module.exports = TabsScreen;