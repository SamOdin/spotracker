import React, {Component} from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import ViewContainer from '../components/ViewContainer';

class Compass extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ViewContainer>
                <Grid>
                    <Row size={3}>
                        <Image source={require('../assets/img/compass.png')} style={styles.compass} />
                    </Row>
                    <Row size={1}>
                        <Col style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            paddingLeft: 40
                        }}>
                            <Text>Distance to pet:</Text>
                            <Text>1km 340m</Text>

                        </Col>
                        <Col style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            paddingLeft: 40
                        }}>
                            <Text>44</Text>
                            <Text>14 57 37</Text>
                            <Text>120 45 40</Text>
                        </Col>
                    </Row>
                </Grid>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    compass: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        width: null,
        height: null
    }
});

module.exports = Compass;