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

import {Navigator} from 'react-native-deprecated-custom-components'
import SecondView from './SecondView'

export default class FirstView extends Component {

    constructor(props){
        super(props);
        this.state={
            userName:null
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navStyle}>
                    {/*导航条中间的文字*/}
                    <Text>{this.props.name+'+'+this.state.userName}</Text>
                </View>
                <TouchableOpacity
                    onPress={(username)=>this.click()}
                >
                    <Text>
                        {this.props.account}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
    click(){
        this.props.nav.push({
            component:SecondView,
            params:{
                name_second:'小东二世',
                getUserName:(username)=>this.getUserName(username)
            }
        })
    }
    getUserName(username){
        this.setState({
            userName:username
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
    navStyle:{
        position:'absolute',
        top:0,
        width:375,
        height:64,
        backgroundColor:'#dddddd',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'rgba(1,1,1,1)',
        paddingTop:20,

    }
});
