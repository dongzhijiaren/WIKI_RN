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
var imageData = require('../BannerData.json');
//获取屏幕分辨率和宽度
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');


export default class BannerView extends Component {
    state={
        currentPage:0
    }
    static  defaultProps ={
        duration:2000
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref='scrollview'
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={(e)=>this.onScrollAnimationEnd(e)}
                    onScrollBeginDrag={()=>this.ScrollBeginDrag()}

                >
                    {this.renderAllImage()}
                </ScrollView>
                {/*page指示器*/}
                <View style={styles.pageViewStyle}>
                    {this.renderPage()}
                </View>
            </View>
        );
    }
    componentDidMount(){
        // AlertIOS.alert('来了');
        this.startTimer();
    }
    ScrollBeginDrag(){
        // AlertIOS.alert('来了');
        clearInterval(this.timer);
    }
    //滑动结束
    onScrollAnimationEnd(e){
        //e:回调函数返回事件的触发者

        //拿到偏移量
        var offSetX = e.nativeEvent.contentOffset.x;

        //求出当前是第几页
        var currentPage = Math.floor((offSetX/width));

        //更新状态机
        this.setState({
            currentPage:currentPage
        });
        this.startTimer();
    }

    startTimer(){
        var scrollView = this.refs.scrollview;

        var imagCount = imageData.data.length;
        //定时器中this代表的是window而不是对象本身，所以要进行一次取值
        var obj = this;

        this.timer = setInterval(()=> {
            var currentPage = 0;
            if(obj.state.currentPage+1 >= imagCount){
                currentPage = 0;
            }else{
                currentPage = obj.state.currentPage + 1;
            }
            obj.setState({
                currentPage:currentPage
            })

            //手动滚动scrollview
            var offsetX = currentPage * width;
            scrollView.scrollTo({x:offsetX,y:0,animated:true});

        },this.props.duration);
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
                    style = {{width:width,height:180}}
                />
            )
        }
        return allImage;
    }
    renderPage(){
        var style;
        var pageArr = [];
        var imageArr = imageData.data;
        for(var i = 0;i<imageArr.length;i++){
            style = (i == this.state.currentPage) ? {color:'orange'}:{color:'#ffffff'}
            pageArr.push(
                <Text
                key={i}
                style = {[{fontSize:25},style]}
                >
                    &bull; </Text>
            )
        }
        return pageArr;
    }


}

const styles = StyleSheet.create({
    container: {
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
    pageViewStyle: {
        flexDirection: 'row',
        width:width,
        height:25,
        backgroundColor:'rgba(0,0,0,0.2)',
        position:'absolute',
        bottom:0,
        justifyContent:'center',
        alignItems:'center'
    }
});
