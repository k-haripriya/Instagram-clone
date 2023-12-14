import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import Header from '../../Components/HomeScreen/Header/Header';
import PostView from '../../Components/HomeScreen/PostView/PostView';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/Store';

const HomeScreen = () => {
  const loggedInuserId = useSelector((state: RootState) => state.setuser);
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
  const following = users.filter(item =>
    item.Followers?.includes(loggedInuserId),
  );
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
              userId={item.UserId}
              postId={item.PostId}
              dp={fetchUserDp({userId: item.UserId})}
              username={fetchUserName({userId: item.UserId})}
              img={item.Img}
              description={item.Description}
              saved={item.Saved?.includes(loggedInuserId) ? true : false}
              liked={item.liked?.includes(loggedInuserId) ? true : false}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
