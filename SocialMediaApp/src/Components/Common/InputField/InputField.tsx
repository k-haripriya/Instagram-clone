import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Inputfields} from '../../../Types/Types';

const InputField = (props: Inputfields) => {
  const { name, handleInputChange, value } = props;
  const isPassword = name === 'Password';
  return (
    <View style={styles.textInput}>
      <TextInput
        placeholder={`Enter your ${name} `}
        placeholderTextColor={'black'}
        secureTextEntry = {isPassword}
        value={value}
        onChangeText={(newText)=>handleInputChange({ field: name, value: newText })}
        
      />
    </View>
  );
};

export default InputField;
