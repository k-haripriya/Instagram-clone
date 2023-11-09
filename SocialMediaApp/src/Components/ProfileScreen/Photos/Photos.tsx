import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/Store'
import { PhotosType } from '../../../Types/Types'

const Photos = (props:PhotosType) => {

  const { handleVisible,handleVisiblePhoto } = props;

  const Data = useSelector((state:RootState)=>state.posts);
  const userId = useSelector((state:RootState)=>state.setuser );

  

  const FilteredData = Data.filter((item)=>{
    if(item.UserId === userId)
    {
      return item;
    }
  })
  return (
    <View>
      <Text style={styles.text}>Photos</Text>
      <ScrollView contentContainerStyle={styles.scroll}>
      {
        FilteredData?.map((item,index)=>{
            return (
              <TouchableOpacity key={index} onPress={()=>{handleVisible(),handleVisiblePhoto({photo:item?.Img})}}>
                <Image  source={{uri:item?.Img}} style={styles.img}/>
              </TouchableOpacity>
            )
        })
      }
      </ScrollView>

    </View>
  )
}

export default Photos