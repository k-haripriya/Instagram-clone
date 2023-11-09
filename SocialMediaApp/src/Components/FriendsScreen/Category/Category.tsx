import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import { CategoryType } from '../../../Types/Types';

const Category = (props:CategoryType) => {
  const { handleType } = props;
  const categories = ['Followers', 'Following', 'People'];
  const [isSelected, setIsSelected] = useState('People');
  const handleCategory = (item: string) => {
    setIsSelected(item);
    handleType(item);
  };
  return (
    <View style={styles.container}>
      {categories.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => handleCategory(item)} style={item===isSelected? styles.activebtn:styles.btn}>
            <Text style={item===isSelected ? styles.activecat:styles.text}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Category;
