import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import AvailableTrips from '../screens/AvailableTrips';
import DetailsScreen from '../screens/DetailsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {DataProp} from '../data/data';

export type RootStackParamList = {
  Home: undefined;
  DetailsScreen: {item: DataProp};
  AvailableTrips: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AvailableTrips"
          component={AvailableTrips}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
