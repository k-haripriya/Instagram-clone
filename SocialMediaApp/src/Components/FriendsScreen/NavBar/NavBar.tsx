import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import IonIcons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/Store';
import { BackNavigation } from '../../../Types/Types';

const NavBar = (props:BackNavigation) => {

  const { handleBack } = props;

  const userId = useSelector((state:RootState)=>state.setuser);
  const users = useSelector((state:RootState)=>state.user);
  const currentuser = users.find((item)=>item.Id===userId);
  return (
    <View style={styles.navcont}>
      <TouchableOpacity onPress={()=>handleBack()}>
         <IonIcons name='arrow-back' color='white' size={26}/>

      </TouchableOpacity>
        <Text style={styles.text}>{currentuser?.Username}</Text>
    </View>
  )
}

export default NavBar