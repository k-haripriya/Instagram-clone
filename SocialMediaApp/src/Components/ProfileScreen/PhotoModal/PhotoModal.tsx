import {View, Text, Modal, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {PhotoModalType} from '../../../Types/Types';
import {styles} from './styles';
import img from '../../../Images/Jpg/post2.jpg';
import IonIcons from 'react-native-vector-icons/Ionicons';

const PhotoModal = (props: PhotoModalType) => {
  const {isPhotoVisible,photo,handleVisible} = props;
  return (
    <Modal visible={isPhotoVisible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <View style={styles.imgview}>
        
          <TouchableOpacity style={styles.closebtn} onPress={()=>handleVisible()}>
            <IonIcons name="close-circle" size={32} />
          </TouchableOpacity>
         
          <Image source={{uri:photo}} style={styles.img} />
        </View>
      </View>
    </Modal>
  );
};

export default PhotoModal;
