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

//列表展示练习（ListView)
import LView from './JS_ZD/LView'
//加载不同存储目录的图片（本地、APP、远程网络等三种类型）
import ImageDemo from './JS_ZD/ImageDemo'
//九宫格展示图片(获取屏幕分辨率来进行布局）
import JiuGong  from './JS_ZD/JiuGong'
//RN定时器
import TimerDemo from './JS_ZD/TimerDemo'
//RN状态机
import RNStateDemo from './JS_ZD/RNStateDemo'
//轮播图例子
import BannerView from './JS_ZD/BannerView'
//TabBarIOS示例
import TabBarDemo from './JS_ZD/TabBarDemo'
//Navigator示例
import NavigatorDemo from './JS_ZD/Navigator/NavigatorDemo'
//原生UI组件交互
import IOSNativeUI from './JS_ZD/NativeUI/IOSNativeUI'
//自定义Tabbar+Navigator
import ZDMain from './JS_ZD/TabBar+Navigator/ZDMain'




export default class ListViewTest extends Component {


  render() {
    return (
    <ZDMain />
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

AppRegistry.registerComponent('ListViewTest', () => ListViewTest);
