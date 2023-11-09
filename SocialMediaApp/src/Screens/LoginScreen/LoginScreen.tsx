import {View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import React,{ useEffect, useState } from 'react';
import {styles} from './styles';
import logo from '../../Images/Png/logo.png';
import Login from '../../Components/LoginScreen/Login/Login';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationStackParams } from '../../Types/Types';

const LoginScreen = ({navigation}:NativeStackScreenProps<NavigationStackParams>) => {
  const [ isLogin, setIsLogin ] = useState(true);
  const handleLogin = () => {
    setIsLogin(!isLogin);
  }
  
  const redirect = () =>
  {
    navigation.navigate("MainScreen");
  }
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <View style={styles.images}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.text1}>INSTAGRAM</Text>
        </View>
      </View>
      <View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        >
        <Login isLogin={isLogin} handleLogin={handleLogin} redirect={redirect}/>
      </KeyboardAvoidingView>
      </View>
      <View style={styles.bottomcont}>
        <View style={styles.signup}>
          <Text style={styles.text2}>{isLogin? 'Don\'t ':'Already '}have an account?</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.text3}>{isLogin? 'SignUp':'Login'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
