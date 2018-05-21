/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  TabNavigator,
  StackNavigator,
  TabBarBottom,
} from 'react-navigation';
import ColorStyles from './src/common/ColorStyles';
import LoginScreen from './src/LoginScreen';
import MainScreen from './src/MainScreen';
import FavoriteScreen from './src/FavoriteScreen';
import MusicScreen from './src/MusicScreen';
import SettingScreen from './src/SettingScreen';
import { DetailScreen } from './src/DetailScreen';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';
const tabNavigator = TabNavigator({
  home: {
    screen: MainScreen,
    navigationOptions:{
      tabBarLabel:'首页',//tabBar下面的文章
      headerTitle:'首页',//标题
      tabBarIcon:({//tabBar的图标
        tintColor
      })=>
        <Icon name='ios-home' size={25} color={tintColor}/>
      
      
    }
  },
  favorite: {
    screen: FavoriteScreen,
    navigationOptions:{
      headerTitle:'收藏',
      tabBarLabel:'收藏',
      tabBarIcon:({
        tintColor
      })=>
        <Icon name='ios-heart' size={25} color={tintColor}/>
      
      
    }
  },
  music:{
    screen:MusicScreen,
    navigationOptions:{
      headerTitle:'音乐',
      tabBarLabel:'音乐',
      tabBarIcon:({
        tintColor
      })=>
        <Icon name='ios-musical-notes' size={25} color={tintColor}/>
      
      
    }
  },
  settings:{
    screen:SettingScreen,
    navigationOptions:{
      headerTitle:'设置',
      tabBarLabel:'设置',
      tabBarIcon:({
        tintColor
      })=>(
       <Icon name='ios-settings' size={25} color={tintColor}/>
      )
      
    }
  }
}, {
  initialRouteName: 'home',//默认tab
  tabBarPosition: 'bottom',//tabBar位置
  backBehavior: 'none',
  swipeEnabled: false,//不可滑动
  animationEnabled: false,//切换页面时候没有滑动效果
  tabBarOptions: {
    activeTintColor: ColorStyles.global,
    inactiveTintColor: '#333333',
    showIcon: true,
    indicatorStyle: {
      height: 0
    },
    style: {
      backgroundColor: '#fff', // TabBar 背景色
      paddingBottom: 0,
      // borderTopWidth: 0.5,
      // borderTopColor: '#ccc',
      // margin:0
    },
    labelStyle: {
      fontSize: 12,
      marginTop: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
    tabStyle: {
      height: 56
    }
  }
})
export default App = StackNavigator({
  home:{
    screen:tabNavigator,
  },
  login:{
    screen:LoginScreen,
  
  },
  detail:{
    screen:DetailScreen
  }

},{
  initialRouteName:'login',
  navigationOptions:({
    headerStyle:{
      backgroundColor:ColorStyles.global,
    },
    headerTitleStyle:{
      color:'white',
      fontSize:20,
      flex:1,
      textAlign:'center',
      alignSelf:'center',
    },
    headerTintColor:'white',

  }),
  mode:'card',
  headerMode:'screen',

})
