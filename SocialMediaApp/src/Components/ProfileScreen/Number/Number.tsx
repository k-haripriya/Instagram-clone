import {View, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import {styles} from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/Store';

const Number = () => {
  const userId = useSelector((state: RootState) => state.setuser);
  const users = useSelector((state: RootState) => state.user);
  const posts = useSelector((state: RootState) => state.posts);

  
  const [followers, setfollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [postCount, setPostCount] = useState(0);

  useEffect(()=>{
    const filteredUsers1 = users.filter(item => item.Followers?.includes(userId));
  setFollowing(filteredUsers1.length);

  const currentUser = users.find(item => item.Id === userId);
  const filteredUsers2 = users.filter(item =>
    currentUser?.Followers?.includes(item.Id),
  );
  setfollowers(filteredUsers2.length);

  const FilteredData = posts.filter(item => {
    if (item.UserId === userId) {
      return item;
    }
  });
  setPostCount(FilteredData.length);
  },[users,posts]
  )

  const numbers = [
    {
      number: postCount,
      data: 'Posts',
    },
    {
      number: followers,
      data: 'Followers',
    },
    {
      number: following,
      data: 'Following',
    },
  ];
  return (
    <>
      {numbers.map((item, index) => {
        return (
          <View key={index} style={styles.foll}>
            <Text style={styles.number}>{item.number}</Text>
            <Text style={styles.text}>{item.data}</Text>
          </View>
        );
      })}
    </>
  );
};

export default Number;
