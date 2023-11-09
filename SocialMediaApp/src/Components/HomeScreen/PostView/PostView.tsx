import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {styles} from './styles';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Posts } from '../../../Types/Types';
import profile from '../../../Images/Jpg/profile.jpg'


const PostView = (props:Posts) => {

  const { dp, username, img, description } = props;
  const [ isLiked, setIsLiked ] = useState(false);
  const [ isSaved, setIsSaved ] = useState(false);

  const handleLike =() =>{
    setIsLiked(!isLiked);
  }

  const handleSave = () => {
    setIsSaved(!isSaved);
  }
  return (
    <View style={styles.container}>
      <View style={styles.postheader}>
        <View style={styles.user}>
        {dp!== profile ? (
                <Image
                  source={{uri: dp}}
                  style={styles.dp}
                />
              ) : (
                <Image source={profile} style={styles.dp} />
              )}
        <Text style={styles.username}>{username}</Text>
        </View>
        <IonIcons name="information-circle" size={20} color={'white'} />
      </View>
      <Image source={{uri:img}} style={styles.post}/>
      <View style={styles.postheader}>
        <View style={styles.user}>
            <TouchableOpacity onPress={()=>handleLike()}>
            <IonIcons name='heart' color={isLiked? "red":"white"} size={18}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <IonIcons name='chatbubble' color="white" size={16}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <IonIcons name='send' color="white" size={14}/>
            </TouchableOpacity>

        </View>
        <TouchableOpacity onPress={()=>handleSave()}>
        <IonIcons name='bookmark' color={isSaved? 'gray':'white'} size={16}/>
        </TouchableOpacity>
      </View>
      <View style={styles.description}>
        <Text style={styles.username1}>{username}</Text>
        <Text style={styles.des}>{description}</Text>
      </View>
    </View>
  );
};

export default PostView;
