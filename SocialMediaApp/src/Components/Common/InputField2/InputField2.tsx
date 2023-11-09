import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Inputfields1 } from '../../../Types/Types'
import { styles } from './styles'


const InputField2 = (props:Inputfields1) => {
    const { name, value, handleInputChange } = props
  return (
    <View style={styles.container}>
      <Text style={styles.fieldname}>{name}</Text>
      <TextInput style={styles.textinput} value={value} onChangeText={(newText)=>handleInputChange({field:name, value:newText})}/>
    </View>
  )
}

export default InputField2