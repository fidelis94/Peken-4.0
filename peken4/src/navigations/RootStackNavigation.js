import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screen/SplashScreen';
import TabStackNavigation from './TabStackNavigation';

const RootStack = createStackNavigator();

const RootStackNavigation = ({navigation}) => {
  return (
    <RootStack.Navigator initialRouteName="Splash">
      <RootStack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="TabStackNavigation"
        component={TabStackNavigation}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
