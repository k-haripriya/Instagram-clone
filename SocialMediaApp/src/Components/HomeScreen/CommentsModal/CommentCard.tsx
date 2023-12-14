import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles'
import { Image } from 'react-native-animatable'
import IonIcons from 'react-native-vector-icons/Ionicons';
import { commentcardType } from '../../../Types/Types'
import { RootState } from '../../../redux/Store'
import { useSelector } from 'react-redux'


const CommentCard = (props:commentcardType) => {

  const { userId, comment } = props;

  const users = useSelector((state:RootState)=>state.user);

  const selectedUser = users.find((user)=>user.Id===userId);
  
  return (
    <View style={styles.box}>
      <View style={styles.dpandname}>
      <Image source={selectedUser?.Dp} style={styles.dp}/>
      <View style={styles.nameandcomments}>
        <Text style={styles.username}>{selectedUser?.Username}</Text>
        <Text style={styles.comments}>{comment}</Text>
      </View>
      </View>
      <IonIcons name="heart" color={'white'} size={18}/>     
    </View>
  )
}

export default CommentCard