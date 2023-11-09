import {View, Text, Button, KeyboardAvoidingView} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputField from '../../Common/InputField/InputField';
import {styles} from './styles';
import Buttons from '../../Common/Buttons/Buttons';
import {InputProps, LoginProps} from '../../../Types/Types';
import {DataProps} from '../../../Types/Types';
import {useDispatch, useSelector} from 'react-redux';
import {adduser} from '../../../redux/slices/UserSlice';
import {RootState} from '../../../redux/Store';
import { setuser } from '../../../redux/slices/setUserSlice';
import profile from '../../../Images/Jpg/profile.jpg';

const Login = (props: LoginProps) => {
  const {isLogin, handleLogin, redirect } = props;

  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user);

  const loginFields = ['Email', 'Password'];
  const signUpfields = ['Email', 'Username', 'PhoneNumber', 'Password'];
  const initialstate = {
    Email: '',
    Username: '',
    Password: '',
    PhoneNumber: '',
    Dp:profile,
    Bio:'',
    Pronoun:'',
    DisplayName:'',
    
  };

  
  const [data, setData] = useState<DataProps>(initialstate);

  const handleInputChange = (props: InputProps) => {
    const {field, value} = props;
    setData({...data, [field]: value});
  };

  const onClick = () => {
    if (isLogin) {
      users.forEach(user => {
        if (user.Email === data.Email && user.Password === data.Password) {
          dispatch(setuser(user.Id));
          setData(initialstate);
          redirect();
        }
      });
    } else {
      dispatch(adduser(data));
     
      // console.log('data', data);
      setData(initialstate);
      
      handleLogin();
    }
  };

  // useEffect(()=>{
  //   console.log("Users", users);
  // })


  return (
    <KeyboardAvoidingView>
      <Text style={styles.text}>{isLogin ? 'LOGIN' : 'SIGNUP'}</Text>
      {isLogin
        ? loginFields.map((item, index) => {
            return (
              <InputField
                key={index}
                name={item}
                value={data[item as keyof DataProps]}
                handleInputChange={handleInputChange}
              />
            );
          })
        : signUpfields.map((item, index) => {
            return (
              <InputField
                key={index}
                name={item}
                value={data[item as keyof DataProps]}
                handleInputChange={handleInputChange}
              />
            );
          })}
      {isLogin && (
        <View style={styles.fp}>
          <Text style={styles.fptext}>Forgot Password?</Text>
        </View>
      )}
      <View style={styles.buttonview}>
        <Buttons name={'SUBMIT'} type={'big'} OnClick={onClick} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
