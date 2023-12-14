import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import {styles} from './styles';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { CommentsPageType } from '../../../Types/Types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/Store';
import { addComment } from '../../../redux/slices/PostSlice';

const AddCommentModal = (props:CommentsPageType) => {

  const { postId } = props;

  const loggedInUser = useSelector((state:RootState)=>state.setuser);
  const dispatch = useDispatch();
  const [ comment, setComment ] = useState('');
  const handleInputChange= (text:string) => {
    setComment(text);
  }
  const handleAddComment = () =>{
    dispatch(addComment({userId:loggedInUser,comment:comment,postId:postId}))
    setComment('');
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={styles.addcomment}>
        <TextInput
          style={styles.input}
          placeholder="Add Comment..."
          multiline
          value={comment}
          placeholderTextColor={'#F5F5F5'}
          onChangeText={(newtext)=>handleInputChange(newtext)}
        />
        <TouchableOpacity onPress={()=>handleAddComment()}>
          <IonIcons name="add-circle" color={'white'} size={22} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddCommentModal;
