import React, {Component} from 'react';
import {Text, StyleSheet, Image} from 'react-native';

import ViewContainer from '../components/ViewContainer';
import { Col, Row, Grid } from 'react-native-easy-grid';

class SwiperScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ViewContainer>
                <Grid>
                    <Row size={1}>
                        <Col>
                            <Image source={require('../assets/img/logo.png')} style={styles.backgroundImage} />
                        </Col>
                    </Row>
                    <Row size={1} style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text>TEST</Text>
                    </Row>
                    <Row size={5} style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        marginLeft: 20
                    }}>
                        <Text>TEST</Text>
                    </Row>
                </Grid>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

module.exports = SwiperScreen;