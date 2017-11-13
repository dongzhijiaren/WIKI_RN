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

//ScrollableTabView的默认样式是ScrollableTabBar（带滑动效果）
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view'
import {Navigator} from 'react-native-deprecated-custom-components'


import ZDHome from './ZDHome'
import ZDFind from './ZDFind'
import ZDMessage from './ZDMessage'
import ZDMine from './ZDMine'
import ZDTabBar from "./ZDTabBar";



export default class ZDMain extends Component {

    constructor(props){
        super(props);
        this.state={
            tabNames:['首页','我的','发现','消息'],//tab文字集合
            tabIconNames:['tabbar_home','tabbar_profile','tabbar_discover','tabbar_message_center'], //默认item图片名称集合
            tabIconSelectedNames:['tabbar_home_highlighted','tabbar_profile_highlighted','tabbar_discover_highlighted','tabbar_message_center_highlighted'],//选中item图片名称集合
        }
    }

    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        let tabIconSelectedNames = this.state.tabIconSelectedNames;
        return (
            <ScrollableTabView
                renderTabBar={()=> <ZDTabBar
                    tabNames={tabNames}
                    tabIconNames={tabIconNames}
                    tabIconSelectedNames={tabIconSelectedNames}
                />}
                tabBarPosition = 'bottom'
                locked={true}
                scrollWithoutAnimation={false}
                tabBarUnderlineStyle={{backgroundColor:'white'}}
                scrollWithoutAnimation={true}
            >
                <Navigator
                    tabLabel="首页"
                    initialRoute={{
                        component:ZDHome,
                        params:{
                            title:'首页'
                        }
                    }}
                    renderScene={(route,navigator)=>
                        <route.component navitator={navigator} {...route.params} />
                    }
                />
                <Navigator
                    tabLabel="我的"
                    initialRoute={{
                        component:ZDMine,
                        params:{
                            title:'我的'
                        }
                    }}
                    renderScene={(route,navigator)=>
                        <route.component navitator={navigator} {...route.params} />
                    }
                />
                <Navigator
                    tabLabel="发现"
                    initialRoute={{
                        component:ZDFind,
                        params:{
                            title:'发现'
                        }
                    }}
                    renderScene={(route,navigator)=>
                        <route.component navitator={navigator} {...route.params} />
                    }
                />
                <Navigator
                    tabLabel="消息"
                    initialRoute={{
                        component:ZDMessage,
                        params:{
                            title:'消息'
                        }
                    }}
                    renderScene={(route,navigator)=>
                        <route.component navitator={navigator} {...route.params} />
                    }
                />
            </ScrollableTabView>
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
