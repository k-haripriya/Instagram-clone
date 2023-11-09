import { View, Text, Modal, Image, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import image1 from '../../../Images/Jpg/post1.jpg'
import InputField2 from '../../Common/InputField2/InputField2'
import Buttons from '../../Common/Buttons/Buttons'
import { KeyboardAvoidingView } from 'react-native'
import { InputProps, PostModal, PostsType } from '../../../Types/Types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/Store'
import { addPost } from '../../../redux/slices/PostSlice'

const Postmodal = (props:PostModal) => {
    
    const { selectedImage, handlePost } = props;
    const dispatch = useDispatch();

    const userId = useSelector((state:RootState)=>state.setuser)

    const initialstate:PostsType = {
        PostId:'',
        Img:selectedImage,
        Description:'',
        UserId:userId,
    }
    
    const [ postData, setPostData ] = useState(initialstate);
    const onDone= () =>{
        dispatch(addPost(postData));
        handlePost();
    }

    const onCancel = () => {
        handlePost();

    }
    const handleInputChange = (props:InputProps) =>{
        const { field, value } = props;
        setPostData({...postData,[field]:value});    
    }

    
  return (
    <Modal animationType='fade' >
        <KeyboardAvoidingView 
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={styles.modal}>
            <Text style={styles.text}>NEW POST</Text>
            <Image source={{uri:selectedImage}} style={styles.image}/>
            <InputField2 name={'Description'} value={postData.Description} handleInputChange={handleInputChange} />
            <View style={styles.buttonView}>
            <Buttons name={'POST'} type={'small'} OnClick={onDone}/>
            <Buttons name={'CANCEL'} type={'small'} OnClick={onCancel} />

            </View>

        </KeyboardAvoidingView>
    </Modal>
  )
}

export default Postmodal