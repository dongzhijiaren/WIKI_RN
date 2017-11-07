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
    TabBarIOS
} from 'react-native';
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

export default class TabBarDemo extends Component {

    constructor(props){
        super(props);
        this.state={
            selectedTabItem:'home'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabBarIOS style={{width:width}}>
                    <TabBarIOS.Item
                        systemIcon='favorites'
                        // title='首页'
                        badge='3'
                        selected={this.state.selectedTabItem == 'favorites'}
                        onPress={()=>{this.setState({selectedTabItem:'favorites'})}}
                    >
                        <View>
                            <Text>首页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon='contacts'
                        selected={this.state.selectedTabItem == 'contacts'}
                        onPress={()=>{this.setState({selectedTabItem:'contacts'})}}
                    >
                        <View>
                            <Text>联系人</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon='downloads'
                        selected={this.state.selectedTabItem == 'downloads'}
                        onPress={()=>{this.setState({selectedTabItem:'downloads'})}}
                    >
                        <View>
                            <Text>下载</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon='more'
                        badge='4'
                        selected={this.state.selectedTabItem == 'more'}
                        onPress={()=>{this.setState({selectedTabItem:'more'})}}
                    >
                        <View>
                            <Text>更多</Text>
                        </View>
                    </TabBarIOS.Item>
                </TabBarIOS>
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
});