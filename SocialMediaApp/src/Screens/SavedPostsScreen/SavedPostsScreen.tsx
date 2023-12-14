import { View, Text, Touchable, TouchableOpacity, Modal, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/Store';
import { Post } from '../../redux/slices/PostSlice';
import PostView from '../../Components/HomeScreen/PostView/PostView';
import { SavePosts } from '../../Types/Types';


const SavedPostsScreen = (props:SavePosts) => {

  const { isSavedScreenOpen, handleSavedPosts} = props;


  const loggedInUser = useSelector((state: RootState) => state.setuser);
  const Posts = useSelector((state:RootState)=> state.posts);
  const users = useSelector((state: RootState) => state.user);


  const [ savedPosts, setSavedPosts ] = useState<Post[]>([]);
  

  const fetchSavedPosts = () => {
    const results = Posts.filter((post)=>post.Saved?.includes(loggedInUser));
    setSavedPosts(results);

  }
  const fetchUserDp = ({userId}: any) => {
    const target = users.find(item => item.Id === userId);
    return target?.Dp;
  };

  const fetchUserName = ({userId}: any) => {
    const target = users.find(item => item.Id === userId);
    return target?.Username;
  };

  

  useEffect(()=>{
    fetchSavedPosts();
  },[Posts]);

  
  return (
    <Modal animationType='fade' visible={isSavedScreenOpen} >
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>handleSavedPosts()}>
         <IonIcons name='arrow-back' color='white' size={26}/>


          </TouchableOpacity>
         <Text style={styles.heading}>Saved Posts</Text>
         


        </View>
        <ScrollView style={{marginBottom:50}}>
        {
          savedPosts?.map((item,index)=>{
            return(
              <PostView
              key={index}
              postId={item.PostId}
              userId={item.UserId}
              dp={fetchUserDp({userId: item.UserId})}
              username={fetchUserName({userId: item.UserId})}
              img={item.Img}
              description={item.Description}
              saved={item.Saved?.includes(loggedInUser)? true:false}
              liked={item.liked?.includes(loggedInUser)? true:false}

            />
            )
          })
         }
         </ScrollView>
    </View>
    </Modal>

  )
}

export default SavedPostsScreen