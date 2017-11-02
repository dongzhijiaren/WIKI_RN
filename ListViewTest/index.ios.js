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
  View
} from 'react-native';

//列表展示练习（ListView)
import LView from './LView'
//加载不同存储目录的图片（本地、APP、远程网络等三种类型）
import ImageDemo from './ImageDemo'
//九宫格展示图片(获取屏幕分辨率来进行布局）
import JiuGong  from './JiuGong'
//RN定时器
import TimerDemo from './TimerDemo'
//RN状态机
import RNStateDemo from './RNStateDemo'
//轮播图例子
import BannerView from './BannerView'



export default class ListViewTest extends Component {


  render() {
    return (
    <LView/>
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
