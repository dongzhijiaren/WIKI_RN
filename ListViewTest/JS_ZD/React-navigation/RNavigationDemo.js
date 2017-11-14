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
} from 'react-native';


import {StackNavigator} from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'


const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home',
        }
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            headerTitle: 'Details',
        }
    }
},{
    initialRouteName:'Home',
    gesturesEnabled:'ture'
});


export default class RNavigationDemo extends Component {

    render() {
        return (
            <RootNavigator/>
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
});
