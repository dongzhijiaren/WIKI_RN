/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class ImageDemo extends Component {

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.instructions}>
                    本地图片
                </Text>
                <Image source={require('../img/icon3.png')} style={styles.iconStyle} />
                <Text style={styles.instructions}>
                    APP图片
                </Text>
                <Image source={{uri:'9'}} style={styles.iconStyle} />
                <Text style={styles.instructions}>
                    网络图片
                </Text>
                <Image source={{uri:'https://static.pgyer.com/static-20171110/images/newHome/distribute.png'}} style={styles.iconStyle}>
                    <Text style={styles.textStyle}>
                        设置图片为背景
                    </Text>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    iconStyle: {
        width:180,
        height:180,
        // borderRadius:40
    },
    textStyle: {
        paddingLeft:50,
        paddingTop:50,
        color:'red',
        backgroundColor:'rgba(0,0,0,0)'
    }
});

