import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import NavBar from '../../Components/FriendsScreen/NavBar/NavBar'
import Category from '../../Components/FriendsScreen/Category/Category'
import Friends from '../../Components/FriendsScreen/Friends/Friends'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { NavigationStackParams } from '../../Types/Types'

const FriendsScreen = ( { navigation }:NativeStackScreenProps<NavigationStackParams>) => {
  const [ type, setType ] = useState('People');
  const handleType = (data:string) =>{
    setType(data);
  }

  const handleBack = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <NavBar handleBack={handleBack}/>
      <Category handleType={handleType}/>
      <ScrollView>
          <Friends type={type}/>
      </ScrollView>
    </View>
  )
}

export default FriendsScreen