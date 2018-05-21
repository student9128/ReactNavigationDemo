import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
export class SettingScreen extends Component {
  static navigationOptions = {
    headerLeft: null,
  };
  render() {
    return (
      <View>
        <Text>SettingScreen</Text>
      </View>
    )
  }
};

export default SettingScreen;
