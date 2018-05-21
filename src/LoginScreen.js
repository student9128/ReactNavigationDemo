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
import ColorStyles from '../src/common/ColorStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginItem from './components/LoginItem';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const nav = this.props.navigation
    return (
      <View style={styles.container}>
      <StatusBar
     backgroundColor="gray"
     barStyle="light-content"
     />
     <View style={styles.loginItemContainer}>
       <LoginItem icon_name='ios-contact' 
       placeholder='Please text in username'
       icon_color={ColorStyles.global}/>
       <LoginItem icon_name='ios-lock' 
       placeholder='Please text in password'
       secureTextEntry={true}
       icon_color={ColorStyles.global}/>
       <TouchableOpacity activeOpacity={0.9} onPress = {()=>nav.navigate('home')}>
       <Text style={styles.btnLogin}>登录</Text>
     </TouchableOpacity>
     </View>
      </View>
    )
  }
};

const styles=StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal:16,
    justifyContent:'center'
  },
  btnLogin:{
    marginTop: 50,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor:ColorStyles.global,
    color:'white',
    textAlign:'center',
    borderRadius: 5,
  },
loginItemContainer:{
  paddingHorizontal: 20,
}
})
