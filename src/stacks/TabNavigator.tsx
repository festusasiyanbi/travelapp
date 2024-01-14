import React from 'react';
import {RootStackParamList} from './StackNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorite from '../screens/Favorite';
import Menu from '../screens/Menu';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import DisplayTrips from '../screens/DisplayTrips';
import {StyleSheet, View} from 'react-native';

const screenOptions = ({route}: any) => ({
  tabBarIcon: () => {
    let iconName: any;
    if (route.name === 'DisplayTrips') {
      iconName = 'home';
    } else if (route.name === 'Menu') {
      iconName = 'bars';
    } else if (route.name === 'Profile') {
      iconName = 'user-o';
    } else if (route.name === 'Favorite') {
      iconName = 'heart-o';
    }

    return (
      <View style={[styles.iconWrapper]}>
        <Icon name={iconName} size={18} color="#fff" />
      </View>
    );
  },
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: '#35140D',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
});

const TabNavigator = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();
  return (
    <Tab.Navigator
      initialRouteName="DisplayTrips"
      screenOptions={screenOptions}>
      <Tab.Screen
        name="DisplayTrips"
        component={DisplayTrips}
        options={{tabBarLabel: 'DisplayTrips', headerShown: false}}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{tabBarLabel: 'Favorite', headerShown: false}}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{tabBarLabel: 'Menu', headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarLabel: 'profile', headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  iconWrapper: {
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#5194C1',
  },
});
