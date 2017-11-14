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
    TouchableOpacity
} from 'react-native';


import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>this.click()}
                >
                    <View>
                        <Text style={styles.welcome}>
                            Welcome to HomeScreen
                            点我跳转到下个页面
                        </Text>
                    </View>
                </TouchableOpacity>


            </View>
        );
    }
    click(){
        console.log('nav...:'+this.props.navigation);
        this.props.navigation.navigate(
            'Details',
            {
                ID:'1',
                name:'zhangdong',
                money:'9999999'
            }
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
