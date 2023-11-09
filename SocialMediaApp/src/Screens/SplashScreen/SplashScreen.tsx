import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationStackParams} from '../../Types/Types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from './styles';
import logo from '../../Images/Png/logo.png';


const SplashScreen = ({
  navigation,
}: NativeStackScreenProps<NavigationStackParams>) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('LoginScreen'), 2000);
  });
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

export default SplashScreen;
