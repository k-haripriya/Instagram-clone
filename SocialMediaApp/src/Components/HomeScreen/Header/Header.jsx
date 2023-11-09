import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Header = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>INSTAGRAM</Text>
      <TouchableOpacity>
        <IonIcons name="chatbox" size={26} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
