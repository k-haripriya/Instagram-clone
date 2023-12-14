import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles }  from './styles'
import IonIcons from 'react-native-vector-icons/Ionicons';
import { BottomSheetType } from '../../../Types/Types';

const BottomSheet = (props:BottomSheetType) => {
    const { handleModal, isModalVisible, handleLogout, handleSavedPosts,handleSettingsScreen } = props
    
    const Items = [
        {
          name:'Settings',
          iconName:'settings',
        },
        {
          name:'Saved',
          iconName:'bookmark',
        },
        {
          name:'Log Out',
          iconName:'log-out',
        }
      ]
  return (
    <Modal animationType='slide' visible={isModalVisible} transparent={true}>
      <View style={styles.bottomContainer}>
          <View style={styles.bottomView}>
            <TouchableOpacity onPress={()=>handleModal()}>
            <IonIcons name='remove' size={48} color={'white'} style={{alignSelf:'center'}}/>
            </TouchableOpacity>
            {
              Items.map((item,index)=>{
                return(
                  <View key={index}>
                    <TouchableOpacity style={styles.items} onPress={item.name === 'Saved' ? ()=>handleSavedPosts() : item.name === 'Settings' ? ()=>handleSettingsScreen() : ()=>handleLogout()}>
                    <IonIcons name={item.iconName} size={22} color={'white'}/>
                    <Text style={styles.itemname}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                )
              })
            }
          </View>
      </View>
      </Modal>
  )
}

export default BottomSheet