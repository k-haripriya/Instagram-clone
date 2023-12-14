import { View, Text, Modal } from 'react-native'
import React from 'react'
import { settingsScreenType } from '../../Types/Types'
import { styles } from './styles';

const SettingsScreen = (props:settingsScreenType) => {

  const { isSettingsOpen } = props;
  return (
    <Modal animationType='slide'  visible={isSettingsOpen}>
        <View style={styles.container}>

        </View>

    </Modal>
  )
}

export default SettingsScreen