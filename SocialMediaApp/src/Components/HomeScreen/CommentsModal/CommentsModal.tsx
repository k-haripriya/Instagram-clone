import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {CommentsType} from '../../../Types/Types';
import {styles} from './styles';
import IonIcons from 'react-native-vector-icons/Ionicons';
import CommentCard from './CommentCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/Store';

const CommentsModal = (props: CommentsType) => {
  const {isCommentsVisible, handleComments,postId} = props;

  const posts = useSelector((state:RootState)=>state.posts);
  
  const selectedpost = posts.find((post)=>post.PostId===postId);

  const comments = selectedpost?.comments;

  return (
    <Modal animationType="slide" visible={isCommentsVisible} transparent={true}>
      <View style={styles.Container}>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={() => handleComments()}>
            <IonIcons
              name="remove"
              size={48}
              color={'white'}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
          <View style={styles.line}>
            <Text style={styles.heading}>Comments</Text>
          </View>
          <ScrollView>
            {
              comments?.map((comment,index)=>{
                return(
                  <CommentCard key={index} userId={comment[0]} comment={comment[1]} />

                )
              })
            }
            
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default CommentsModal;
