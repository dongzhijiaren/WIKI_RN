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
    ListView,
    Image,
    TouchableOpacity,
    AlertIOS
} from 'react-native';


var Heros = require('./heros.json');
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

export default class LView extends Component {

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(Heros)
        }
    }

    render() {
        return (
            <ListView
                style={{marginTop:25}}
                dataSource = {this.state.dataSource}
                renderRow = {this.renderRow}
            />
        );
    }

    renderRow(rowData,sectionID,rowID,highlightRow){
        return(
            <TouchableOpacity activeOpacity={0.5}
            onPress={()=>{AlertIOS.alert('购买成功!','成功解锁'+rowData.name+'英雄!')}}
            >
                <View style={styles.cellViewStyle}>
                    {/*左边的图片*/}
                    <Image source={{uri:rowData.image}} style={styles.leftImageStyle}/>
                        {/*右边的View*/}
                    <View style={styles.rightViewStyle}>
                        {/*上面是英雄名称*/}
                    <Text style={styles.topTitleStyle}>{rowData.name}</Text>
                        {/*下面是英雄描述*/}
                    <Text style={styles.bottomTitleStyle}
                        numberOfLines={3}
                            >{rowData.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
    )
    }
}

const styles = StyleSheet.create({
    cellViewStyle:{
        //分割线
        borderBottomWidth:0.5,
        borderBottomColor:'#e8e8e8',
        //cell内部缩一下
        padding:10,
        //主轴横过来
        flexDirection:'row'

    },
    leftImageStyle:{
        width:60,
        height:60,
        marginRight:15
    },
    rightViewStyle:{

    },
    topTitleStyle:{
        fontSize:20,

    },
    bottomTitleStyle:{
        width:width * 0.7,
        marginTop:8
    }
});

