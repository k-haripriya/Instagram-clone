import { View, Text , Modal, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DataProps, EditType, InputProps } from '../../Types/Types'
import { styles } from './styles'
import profile from '../../Images/Jpg/profile.jpg'
import InputField2 from '../../Components/Common/InputField2/InputField2'
import Buttons from '../../Components/Common/Buttons/Buttons'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/Store'
import { User, updateUser } from '../../redux/slices/UserSlice'
import {
  ImageLibraryOptions,
  launchImageLibrary,
  MediaType,
} from 'react-native-image-picker';

const EditScreen = (props:EditType) => {
  const dispatch = useDispatch();
  const userId = useSelector((state:RootState)=>state.setuser);
  const users = useSelector((state:RootState)=>state.user);
  const { isEdit , handleEdit } = props;
  const Fields = [ "Username","DisplayName","Pronoun", "Bio","PhoneNumber"];
  
  
  const selectedUser = users.find((user: User) => user.Id === userId);
  const initialstate = {
    Id:selectedUser?.Id,
    Email: selectedUser?.Email,
    Username: selectedUser?.Username,
    Password: selectedUser?.Password,
    PhoneNumber: selectedUser?.PhoneNumber,
    Dp:selectedUser?.Dp,
    Bio:selectedUser?.Bio,
    Pronoun:selectedUser?.Pronoun,
    DisplayName:selectedUser?.DisplayName,
    Followers:selectedUser?.Followers,
    
  };
  const [ data, setData ] = useState(initialstate);
  const [ image, setImage ] = useState(selectedUser?.Dp);



  const openImagePicker = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Image picker error: ', response.errorCode);
      } else if (response.assets) {
        const selectedImage = response.assets[0];
        if (selectedImage) {
          const imageUri = selectedImage.uri;
          setData({...data,['Dp']:imageUri})
          setImage(imageUri);
        }
      }
    });
  };

  const handleInputChange = (props:InputProps)=>{
      const { field , value } = props;
      setData({...data,[field]:value});
  }

  const onClick = () => {
    // console.log("Done",data);
    dispatch(updateUser(data)); 
    handleEdit(); 
  }

  
  return (
    
    <Modal animationType='slide' visible={isEdit} >
       
      <View style={styles.container}>
      
        <View style={styles.dpcont}>
          {
          image!==profile ? (
        <Image source={{uri:image}} style={styles.dpimg} />

          ):(
        <Image source={profile} style={styles.dpimg} />

          )
        }
          <TouchableOpacity onPress={()=>openImagePicker()}>
          <Text style={styles.username}>Edit Profile Photo</Text>
          </TouchableOpacity>
        </View>
        {selectedUser &&
          Fields.map((item,index)=>{
            return(
              <InputField2 key={index} name={item} value={data[item as keyof DataProps]} handleInputChange={handleInputChange}/>
            )
          })
        }
        <View style={styles.btncont}>
          <Buttons name={'DONE'} type={'small'} OnClick={onClick} />
          <Buttons name={'CANCEL'} type={'small'} OnClick={handleEdit} />

        </View>
        

      </View>
    </Modal>
    
  )
}

export default EditScreen