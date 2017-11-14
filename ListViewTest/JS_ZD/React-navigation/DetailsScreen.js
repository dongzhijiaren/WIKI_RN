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




export default class DetailsScreen extends Component {
    render() {
        // var {params} = this.props.navigation.state.params;
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>this.back()}
                >
                    <View>
                        <Text style={styles.welcome}>
                            返回上一页
                        </Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.welcome}>
                    我是{params.name},我有{params.money}万
                </Text>

            </View>
        );
    }
    back(){
        this.props.navigation.goBack();
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
