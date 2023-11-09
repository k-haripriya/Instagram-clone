import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {Modal} from '../../../Types/Types';


const NavBar = (props: Modal) => {
  

  const {handleModal, openImagePicker} = props;
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Welcome</Text>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => openImagePicker()}>
          <IonIcons name="add-circle" size={32} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleModal()}>
          <IonIcons name="menu" color={'white'} size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBar;
