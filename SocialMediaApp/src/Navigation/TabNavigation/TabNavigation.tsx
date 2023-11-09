import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import {BottomTabsParams, TabsType} from '../../Types/Types';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, View} from 'react-native';
import { styles } from './styles';
import { useEffect, useRef } from 'react';
import * as Animatable from 'react-native-animatable';
import ProfileScreen from '../../Screens/ProfileScreen/ProfileScreen';
import FriendsScreen from '../../Screens/FriendsScreen/FriendsScreen';


const Tab = createBottomTabNavigator<BottomTabsParams>();

const Tabs: TabsType[] = [
  {route: 'HomeScreen', component: HomeScreen, name: 'home'},
  {route: 'FriendsScreen', component: FriendsScreen, name: 'people'},
  {route: 'ProfileScreen', component: ProfileScreen, name: 'person'},

  
];

const TabButton = (props:any) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef<any>(null);

    useEffect(()=>
    {
        if(focused)
        {
            viewRef.current.animate({0:{scale:1, translateY:0},1:{scale:1.1, translateY:-5}})
        }
        else
        {
            viewRef.current.animate({0:{scale:1.1, translateY:-5 },1:{scale:1, translateY:0}})

        }
    },[focused]);

  return (
    <View style={styles.tabview}>
    <TouchableOpacity onPress={onPress} >
        <Animatable.View ref={viewRef} duration={200} >
          <View style={focused && styles.activeButton}>
          <IonIcons
            name={item.name}
            size={24}
            color={focused ? 'white' : 'black'}
          />
            
          </View>
        
      </Animatable.View>
    </TouchableOpacity>
    </View>
  );
};

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          bottom: 20,
          left: 10,
          right: 10,
          borderRadius: 10,
        },
      }}>
      {Tabs.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton :(props)=> <TabButton {...props} item={item}/>,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};
