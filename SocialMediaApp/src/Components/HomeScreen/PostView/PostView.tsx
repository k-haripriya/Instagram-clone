import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {Posts} from '../../../Types/Types';
import profile from '../../../Images/Jpg/profile.jpg';
import {RootState} from '../../../redux/Store';
import {useDispatch, useSelector} from 'react-redux';
import {
  likePost,
  removeSavedPost,
  savePost,
  unlikePost,
} from '../../../redux/slices/PostSlice';
import CommentsModal from '../CommentsModal/CommentsModal';
import AddCommentModal from '../CommentsModal/AddCommentModal';

const PostView = (props: Posts) => {
  const {dp, username, img, description, userId, saved, postId, liked} = props;

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state: RootState) => state.setuser);
  const [ isCommentsVisible, setIsCommentsVisible ] = useState(false);
  const [ isCommentBoxVisible , setIsCommentBoxVisible ] = useState(false);

  const handleLike = () => {
    const res = !liked;

    if (res) {
      dispatch(likePost({userId: postId, followerId: loggedInUser}));
    } else {
      dispatch(unlikePost({userId: postId, followerId: loggedInUser}));
    }
  };

  const handleSave = () => {
    const res = !saved;
    if (res) {
      dispatch(savePost({userId: postId, followerId: loggedInUser}));
    } else {
      dispatch(removeSavedPost({userId: postId, followerId: loggedInUser}));
    }
  };

  const handleComments = () => {
    setIsCommentsVisible(!isCommentsVisible);

  }

  const handleAddComments =() => {
    setIsCommentBoxVisible(!isCommentBoxVisible);

  }

  return (
    <View style={styles.container}>
      <View style={styles.postheader}>
        <View style={styles.user}>
          {dp !== profile ? (
            <Image source={{uri: dp}} style={styles.dp} />
          ) : (
            <Image source={profile} style={styles.dp} />
          )}
          <Text style={styles.username}>{username}</Text>
        </View>
        <IonIcons name="information-circle" size={20} color={'white'} />
      </View>
      <Image source={{uri: img}} style={styles.post} />
      <View style={styles.postheader}>
        <View style={styles.user}>
          <TouchableOpacity onPress={() => handleLike()}>
            <IonIcons name="heart" color={liked ? 'red' : 'white'} size={18} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handleAddComments()}>
            <IonIcons name="chatbubble" color="white" size={16} />
          </TouchableOpacity>
          <TouchableOpacity >
            <IonIcons name="send" color="white" size={14} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => handleSave()}>
          <IonIcons
            name="bookmark"
            color={saved ? '#FFA500' : 'white'}
            size={16}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.description}>
        <Text style={styles.username1}>{username}</Text>
        <Text style={styles.des}>{description}</Text>
      </View>
      {
        isCommentBoxVisible && <AddCommentModal postId={postId}/>
      }
      <View style={styles.commentsView}>
        <TouchableOpacity onPress={()=>handleComments()}>
        <Text style={styles.commentsText}>View All Comments</Text>

        </TouchableOpacity>
      </View>
      <CommentsModal isCommentsVisible={isCommentsVisible} handleComments={handleComments} postId={postId}/>
    </View>
  );
};

export default PostView;
