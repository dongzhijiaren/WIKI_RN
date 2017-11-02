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
    AlertIOS,
} from 'react-native';

export default class RNStateDemo extends Component {

    state = {
        title:'初始值'
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={()=>this.click('点击')}
                                  onPressIn={()=>this.click('按下')}
                                  onPressOut={()=>this.click('抬起')}
                                  onLongPress={()=>this.click('长按')}
                >
                    <View>
                        <Text>
                            {this.state.title}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    click(event){
        this.setState({
            title:event
        })
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

