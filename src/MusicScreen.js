import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
export class MusicScreen extends Component {
  static navigationOptions = {
    headerLeft: null,
  };
  render() {
    return (
      <View>
        <Text>MusicScreen</Text>
      </View>
    )
  }
};

export default MusicScreen;
