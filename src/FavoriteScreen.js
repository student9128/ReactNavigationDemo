import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
export class FavoriteScreen extends Component {
  static navigationOptions = {
    headerLeft: null,
  };
  render() {
    return (
      <View>
        <Text>FavoriteScreen</Text>
      </View>
    )
  }
};

export default FavoriteScreen;
