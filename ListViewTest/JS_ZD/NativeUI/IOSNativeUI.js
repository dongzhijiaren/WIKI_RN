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
    AlertIOS,
    TouchableOpacity,
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components'
//获取原生控件支持库
import {requireNativeComponent} from 'react-native'
//获取原生类中的属性和方法
import {NativeModules} from 'react-native'


// var ZDView  = requireNativeComponent('ShareView',IOSNativeUI);
var ZDView = requireNativeComponent('User',IOSNativeUI);


var UserDemo = NativeModules.User;
UserDemo.changeTitle('我来了');

export default class IOSNativeUI extends Component {
    render() {
        return (
            <ZDView
                style={{flex:1}}
            />
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
});

