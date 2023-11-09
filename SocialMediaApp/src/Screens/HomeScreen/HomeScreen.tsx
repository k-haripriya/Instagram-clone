import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import Header from '../../Components/HomeScreen/Header/Header';
import PostView from '../../Components/HomeScreen/PostView/PostView';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/Store';
import {Post} from '../../redux/slices/PostSlice';

const HomeScreen = () => {
  const userId = useSelector((state: RootState) => state.setuser);
  const users = useSelector((state: RootState) => state.user);
  const posts = useSelector((state: RootState) => state.posts);

  const fetchUserDp = ({userId}: any) => {
    const target = users.find(item => item.Id === userId);
    return target?.Dp;
  };

  const fetchUserName = ({userId}: any) => {
    const target = users.find(item => item.Id === userId);
    return target?.Username;
  };

  const following = users.filter(item => item.Followers?.includes(userId));
  const FollowingUserId = following.map(item => {
    return item.Id;
  });
  const Data = posts.filter(post => FollowingUserId?.includes(post.UserId));

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scroll}>
        {Data?.map((item, index) => {
          return (
            <PostView
              key={index}
              dp={fetchUserDp({userId: item.UserId})}
              username={fetchUserName({userId: item.UserId})}
              img={item.Img}
              description={item.Description}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
