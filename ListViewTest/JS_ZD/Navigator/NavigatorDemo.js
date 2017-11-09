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

/******
 *注意：RN版本升级到0.43以上的话，Navigator不能直接从react-native里面获取了
 * */
import {Navigator} from 'react-native-deprecated-custom-components'

import FirstView from './FirstView'


export default class NavigatorDemo extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{
                    component:FirstView,
                    params:{
                        ID:'106',
                        name:'xiaodong',
                        age:'28',
                        account:'800000万'
                    }
                }}
                renderScene={(route, navigator) =>
                    <route.component {...route.params} nav={navigator}
                    />
                }
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
});
