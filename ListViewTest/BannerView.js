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
    ScrollView,
    AlertIOS,
    Image,
} from 'react-native';

//导入图片数据
var imageData = require('./BannerData.json');
//获取屏幕分辨率和宽度
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

export default class BannerView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollview"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                >
                    {this.renderAllImage()}
                    <View>
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderAllImage(){
        var allImage = [];
        var imgsArr = imageData.data;
        for (var i = 0;i<imgsArr.length;i++){
            var item = imgsArr[i];
            allImage.push(
                <Image
                    key={i}
                    source = {{uri:item.img}}
                    style = {{width:width,height:150}}
                />
            )
        }
        return allImage;
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
