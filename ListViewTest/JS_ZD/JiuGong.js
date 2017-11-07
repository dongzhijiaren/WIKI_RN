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
    Image,
    AlertIOS
} from 'react-native';

var Dimensions = require('Dimensions');
var {width}  = Dimensions.get('window');
var cols = 3;
var boxW = 100;
var vMargin = (width - cols * boxW) / (cols + 1)-8;//九宫格算法....
var hMargin = 25;
var Data = require('../Data.json');


// AlertIOS.alert('屏幕宽度：',''+width);
//AlertIOS.alert('间距：',''+vMargin);

export default class JiuGong extends Component {


    render() {
        return (
            <View style={styles.container}>
                {this.renderImage()}
            </View>
        );
    }

    renderImage(){
        var img = [];
        for (var i = 0;i <Data.length;i++){
            var item = Data[i];
            var imageName = item['icon'];
            img.push(

                <View key={i} style={styles.bagViewStyle}>
                    <Image source={{uri:imageName}} style={styles.imageStyle}></Image>
                    <Text style={styles.textStyle}>{item['name']}</Text>
                </View>
            )
        }
        return img;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap:'wrap',
        marginTop:30,
        backgroundColor:'yellow'

    },
    bagViewStyle: {
        backgroundColor:'gray',
        marginLeft:vMargin,
        marginBottom:20
    },
    imageStyle: {
        width:boxW,
        height:boxW
    },
    textStyle: {
        textAlign:'center',
    }
});
