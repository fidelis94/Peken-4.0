import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screen/dashboard/Dashboard'


const Dasboard = createStackNavigator()


const DashboardStackNavigation = ({navigation}) => {
    return (
      <Dasboard.Navigator  screenOptions={{headerShown: false}}>
        <Dasboard.Screen name={'Dashboard'} component={Dashboard} />
      </Dasboard.Navigator>
    );
  };
  
export default DashboardStackNavigation;