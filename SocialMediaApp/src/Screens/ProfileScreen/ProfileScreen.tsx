import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import NavBar from '../../Components/ProfileScreen/NavBar/NavBar';
import {styles} from './styles';
import Display from '../../Components/ProfileScreen/Display/Display';
import Photos from '../../Components/ProfileScreen/Photos/Photos';
import BottomSheet from '../../Components/ProfileScreen/BottomSheet/BottomSheet';
import EditScreen from '../EditScreen/EditScreen';
import {
  ImageLibraryOptions,
  launchImageLibrary,
  MediaType,
} from 'react-native-image-picker';
import Postmodal from '../../Components/ProfileScreen/PostModal/Postmodal';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationStackParams} from '../../Types/Types';
import {useDispatch} from 'react-redux';
import {setuser} from '../../redux/slices/setUserSlice';
import PhotoModal from '../../Components/ProfileScreen/PhotoModal/PhotoModal';
import SavedPostsScreen from '../SavedPostsScreen/SavedPostsScreen';
import SettingsScreen from '../SettingsScreen/SettingsScreen';

const ProfileScreen = ({
  navigation,
}: NativeStackScreenProps<NavigationStackParams>) => {
  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(false);
  const [isEdit, setEdit] = useState(false);

  const [selectedImage, setSelectedImage] = useState<any>();
  const [isPost, setPost] = useState(false);

  const [isPhotoVisible, setIsPhotoVisible] = useState(false);
  const [ visiblePhoto, setVisiblePhoto ] = useState();

  const [isSavedScreeOpen, setISSavedScreeenOpen ] = useState(false);
  const [ isSettingsOpen, setIsSettingsOpen ] = useState(false);

  const handleVisible = () => {
    setIsPhotoVisible(!isPhotoVisible);
  };

  const handleVisiblePhoto = ({photo}:any) => {
    setVisiblePhoto(photo);
  };

  const handlePost = () => {
    setPost(!isPost);
  };

  const handleLogout = () => {
    dispatch(setuser(''));
    navigation.navigate('LoginScreen');
  };
  
  const handleSavedPosts = () => {
    // navigation.navigate('SavedPostsScreen');
    setISSavedScreeenOpen(!isSavedScreeOpen);
  }

  const handleSettingsScreen = () =>{
    setIsSettingsOpen(!isSettingsOpen);
  }

  const openImagePicker = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Image picker error: ', response.errorCode);
      } else if (response.assets) {
        const selectedImage = response.assets[0];
        if (selectedImage) {
          const imageUri = selectedImage.uri;
          setSelectedImage(imageUri);
          handlePost();
        }
      }
    });
  };

  const handleEdit = () => {
    setEdit(!isEdit);
  };
  const handleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      {isPost && (
        <Postmodal selectedImage={selectedImage} handlePost={handlePost} />
      )}
      <NavBar handleModal={handleModal} openImagePicker={openImagePicker} />
      <Display onClick={handleEdit} />
      <Photos handleVisible={handleVisible} handleVisiblePhoto={handleVisiblePhoto}/>
      <BottomSheet
        handleModal={handleModal}
        isModalVisible={isModalVisible}
        handleLogout={handleLogout}
        handleSavedPosts={handleSavedPosts}
        handleSettingsScreen={handleSettingsScreen}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
        <EditScreen isEdit={isEdit} handleEdit={handleEdit} />
      </KeyboardAvoidingView>
      <PhotoModal isPhotoVisible={isPhotoVisible} photo={visiblePhoto} handleVisible={handleVisible}/>
      <SavedPostsScreen isSavedScreenOpen={isSavedScreeOpen} handleSavedPosts={handleSavedPosts}/>
      <SettingsScreen isSettingsOpen={isSettingsOpen}/>
    </View>
  );
};

export default ProfileScreen;
