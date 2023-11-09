import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Button } from '../../../Types/Types'

const Buttons = (props:Button) => {
  const { name, type, OnClick } = props;
  return (
    <TouchableOpacity style={type==='big' ? styles.button:styles.button1} onPress={()=>OnClick()}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
    
  )
}

export default Buttons