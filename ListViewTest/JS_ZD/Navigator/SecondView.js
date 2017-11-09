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
    TouchableOpacity,
    AlertIOS
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components'

export default class SecondView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to SecondView!
                </Text>
                <TouchableOpacity
                    onPress={this.viewClick.bind(this)}
                >
                    <Text style={styles.welcome}>{this.props.name_second}</Text>
                </TouchableOpacity>
            </View>
        );
    }
    viewClick(){

        //为了严谨起见!!先判断
        if(this.props.getUserName){
            this.props.getUserName('全世界最帅的男人!!')
        }

        //props 属性!!! 这个属性是你这个对象创建的时候定义的!!!
        this.props.nav.pop();
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
