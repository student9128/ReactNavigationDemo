import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar
} from 'react-native';
import ColorStyles from '../src/common/ColorStyles';
export default class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: null,
  };
  render() {
    const {
      navigation
    } = this.props
    const username = navigation.getParam('username', '');
    const password = navigation.getParam('password', '');
    return (
      <View>
        <View style={styles.container}>
        <StatusBar
        backgroundColor={ColorStyles.global}/>
        <Text>MainScreen</Text>
        <Text style={styles.textStyle}>UserName: {username}</Text>
        <Text style={styles.textStyle}>Password: {password}</Text>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  textStyle: {
    color: 'black',
    fontSize:20,

  }
})
