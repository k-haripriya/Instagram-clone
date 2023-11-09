import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/Store';
import { User } from '../../../redux/slices/UserSlice';

const Bio = () => {
  const userId = useSelector((state:RootState)=>state.setuser);
  const users = useSelector((state:RootState)=>state.user);
  
  const selectedUser = users.find((user: User) => user.Id === userId);

  
  if(selectedUser)
  {
    return (
      (selectedUser.DisplayName!='' || selectedUser.Bio!='' || selectedUser.Pronoun!='')?(<View style={styles.info}>
        {selectedUser.DisplayName && <Text style={styles.username}>{selectedUser.DisplayName}</Text>}
        {selectedUser.Pronoun && <Text style={styles.bio}>{selectedUser.Pronoun}</Text>}
        {selectedUser.Bio && <Text style={styles.bio}>{selectedUser.Bio}</Text>}
  
      </View>):(
        <View style={styles.info}>
          <Text style={styles.bio}>Please Setup your Account by clicking the Edit Profile Button</Text>
        </View>
      )
    )
  }
  
}

export default Bio