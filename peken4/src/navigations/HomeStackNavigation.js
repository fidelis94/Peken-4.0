import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Market from '../screen/homescreen/Market';
import Toko from '../screen/homescreen/Toko';
import DetailToko from '../screen/homescreen/DetailToko';

const HomeStack = createStackNavigator();

const HomeStackNavigation = ({navigation}) => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Market" component={Market} />
      <HomeStack.Screen name="TokoScreen" component={Toko} />
      <HomeStack.Screen name="DetailToko" component={DetailToko} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
