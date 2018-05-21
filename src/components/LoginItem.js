import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TextInput,
    Button,StatusBar,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import ColorStyles from '../common/ColorStyles';
import Icon from 'react-native-vector-icons/Ionicons';
export default class LoginItem extends Component{
  render() {
    return (
      <View style={styles.loginItemStyle}>
      <View style={styles.iconStyle}>
        <Icon name={this.props.icon_name} size={30} color={this.props.icon_color}/>
      </View>
        <TextInput style={styles.textInputStyle}
        {...this.props}
        autoCapitalize='none'
        autoFocus={false}
        multiline={false}
        underlineColorAndroid="transparent"
        maxLength={18}/>
      </View>
    )
  };
}

const styles=StyleSheet.create({
    loginItemStyle:{
      flexDirection: 'row',
      justifyContent:'flex-start',
      alignItems: 'center',
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
      marginVertical: 5,
    },
    textInputStyle: {
            width: 280,
            paddingVertical: 0,
            paddingHorizontal: 10,
            height: 40,
    },
    iconStyle:{
        width:35,
        paddingLeft:10,
    }
  })