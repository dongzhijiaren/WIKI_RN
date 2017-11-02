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


export default class LView2 extends Component {

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(Heros)
        };
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

    renderRow(rowData, sectionID, rowID, highlightRow){
        return(
            <TouchableOpacity onPress={()=>{
            AlertIOS.alert('购买成功！','成功解锁'+rowData.name+'英雄')}}>
            <View style={styles.cellViewStyle}>
            <Image source={{uri:rowData.image}} style={styles.leftImageStyle} />
                <View style={styles.rightViewStyle}>
            <Text style={styles.topTitleStyle}>{rowData.name}</Text>
             <Text style={styles.bottomTitleStyle} lineNumber={3}>
                {rowData.title}
             </Text>
                </View>
            </View>
    </TouchableOpacity>
    )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    cellViewStyle: {
        flexDirection:'row',
        padding:10,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    leftImageStyle: {
        width:60,
        height:60,
        marginRight:15
    },
    topTitleStyle: {
        fontSize: 20
    },
    bottomTitleStyle: {
        fontSize:10,
        paddingTop:8,
        width:width * 0.7,
        lineHeight:15
    }
});

