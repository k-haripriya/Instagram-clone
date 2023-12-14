import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import profile from '../../../Images/Jpg/profile.jpg'
import Buttons from '../../Common/Buttons/Buttons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {FriendsType} from '../../../Types/Types';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/Store';
import {User, followuser, removeFollower, unfollowuser} from '../../../redux/slices/UserSlice';

const Friends = (props: FriendsType) => {
  const {type, handleSetUser} = props;
  const dispatch = useDispatch();
  const [Data, setData] = useState<User[]>();
  const users = useSelector((state: RootState) => state.user);
  const userId = useSelector((state: RootState) => state.setuser);

  


  const fetchData = () => {
    if (type === 'People') {
      const users1 = users.filter((item)=>item.Id!== userId)
      const usersNotInFilter = users1.filter(item =>
        !item.Followers?.includes(userId),
      );
      
      setData(usersNotInFilter);
    } else if (type === 'Following') {
      const filteredUsers = users.filter(item =>
        item.Followers?.includes(userId),
      );

      setData(filteredUsers);
    } else if (type === 'Followers') {
      const currentUser = users.find(item => item.Id === userId);
      const filteredUsers = users.filter(item =>
        currentUser?.Followers?.includes(item.Id),
      );
      setData(filteredUsers);
    }
  };

  const handleFollow = ({id}: any) => {
    dispatch(followuser({userId: id, followerId: userId}));
  };

  const handleUnfollow = ({id}:any) => {
    dispatch(unfollowuser({ userId:id , followerId:userId}));
  };

  const handleRemove = ( { id }:any )=>{
    dispatch(removeFollower({userId:userId, followerId:id}));
  }

  

  useEffect(() => {
    fetchData();
  }, [type,users]);

  return (
    <View>
      {Data?.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={()=>handleSetUser()}>
          <View  style={styles.container}>
            <View style={styles.view1}>
              {item?.Dp !== profile ? (
                <Image
                  source={{uri: item?.Dp}}
                  style={styles.dpimg}
                />
              ) : (
                <Image source={profile} style={styles.dpimg} />
              )}
              <View>
                <Text style={styles.username}>{item.Username}</Text>
                <Text style={styles.dpname}>{item.DisplayName}</Text>
              </View>
            </View>
            <View style={styles.view1}>
              {type === 'People' && (
                <Buttons
                  name={'Follow'}
                  type={'small'}
                  OnClick={() => handleFollow({id: item.Id})}
                />
              )}
              {type === 'Followers' && (
                <Buttons name={'Remove'} type={'small'} OnClick={()=>handleRemove({id:item.Id})} />
              )}
              {type === 'Following' && (
                <Buttons name={'UnFollow'} type={'small'} OnClick={()=>handleUnfollow({id: item.Id})} />
              )}
              <IonIcons name="ellipsis-vertical" color={'white'} size={28} />
            </View>
          </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Friends;
