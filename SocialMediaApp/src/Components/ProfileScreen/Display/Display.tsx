import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import profile from '../../../Images/Jpg/profile.jpg';
import Number from '../Number/Number';
import Bio from '../Bio/Bio';
import Buttons from '../../Common/Buttons/Buttons';
import {DisplayType} from '../../../Types/Types';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/Store';
import {User} from '../../../redux/slices/UserSlice';

const Display = (props: DisplayType) => {
  const userId = useSelector((state: RootState) => state.setuser);
  const users = useSelector((state: RootState) => state.user);
  const posts = useSelector((state: RootState) => state.posts);

  const selectedUser = users.find((user: User) => user.Id === userId);

  const {onClick} = props;
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {selectedUser?.Dp !== profile ? (
          <Image source={{uri: selectedUser?.Dp}} style={styles.profile} />
        ) : (
          <Image source={profile} style={styles.profile} />
        )}
        <Number />
      </View>
      <Bio />
      <View style={styles.buttons}>
        <Buttons name={'EDIT PROFILE'} type={'big'} OnClick={onClick} />
      </View>
    </View>
  );
};

export default Display;
