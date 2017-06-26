import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

import { Container, Content, Form, Item, Label, Input, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    login(){

        this.props.navigator.push({
            ident: "tabs"
        })
    }

    render(){
        return(
                <Image source={require('../assets/img/ST_login.png')} style={styles.backgroundImage}>
                    <Grid>
                        <Row size={40}></Row>
                        <Row size={60}>
                            <Content>
                                <Form>
                                    <Item style={{
                                        backgroundColor: '#F8F8FF', height: 100, marginLeft: 30, marginRight: 30}}>
                                        <Icon name="dropbox" size={30} color="#d3d3d3" style={{marginLeft: 15, marginRight: 15}}/>
                                        <Label style={{color: "#999999", letterSpacing: 1}}>EMAIL ADRESS</Label>
                                        <Input onChangeText={(text) => this.setState({email: text})} value={this.state.email} />
                                    </Item>
                                    <Item style={{
                                        backgroundColor: '#F8F8FF', height: 100, marginLeft: 30, marginRight: 30, marginBottom: 30}}>
                                        <Icon name="dropbox" size={30} color="#d3d3d3" style={{marginLeft: 15, marginRight: 15}}/>
                                        <Label style={{color: "#999999", letterSpacing: 1}}>PASSWORD</Label>
                                        <Input secureTextEntry onChangeText={(text) => this.setState({password: text})} value={this.state.password} />
                                    </Item>
                                    <Button block success large onPress={this.login.bind(this)}
                                            style={{marginLeft: 30, marginRight: 30, backgroundColor: '#01B400'}}>
                                        <Text style={{color: '#F8F8FF'}}>Log In</Text>
                                    </Button>
                                </Form>
                            </Content>
                        </Row>
                    </Grid>
                </Image>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    backgroundImage: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        width: null,
        height: null
    }
});

module.exports = Login;