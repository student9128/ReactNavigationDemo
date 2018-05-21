import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar
} from 'react-native';
import ColorStyles from '../src/common/ColorStyles';
export class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: null,
  };
  render() {
    return (
      <View>
        <StatusBar
        backgroundColor={ColorStyles.global}/>
        <Text>MainScreen</Text>
      </View>
    )
  }
};

export default MainScreen;

