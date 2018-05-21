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
import LoginItem from './components/LoginItem';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props){
    super(props);
    this.state={
      username:null,
      password:null,
    }
  }
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
       icon_color={ColorStyles.global}
       onChangeText={(text) => this.state.username=text}/>
       <LoginItem icon_name='ios-lock' 
       placeholder='Please text in password'
       secureTextEntry={true}
       icon_color={ColorStyles.global}
       onChangeText={(text) => this.state.password= text}/>
       
       <TouchableOpacity activeOpacity={0.9} onPress = {
         ()=>{
            console.log(this.state.username);
           nav.navigate('home',{username:this.state.username,password:this.state.password})}}>
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
