import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screen/dashboard/Dashboard';
import FormScreen from '../screen/dashboard/FormScreen';
import FormAlamat from '../screen/dashboard/FormAlamat';


const Dasboard = createStackNavigator()


const DashboardStackNavigation = ({navigation}) => {
    return (
      <Dasboard.Navigator  screenOptions={{headerShown: false}}>
        <Dasboard.Screen name={'Dashboard'} component={Dashboard} />
        <Dasboard.Screen name={'FormScreen'} component={FormScreen} />
        <Dasboard.Screen name={'FormAlamat'} component={FormAlamat} />
      </Dasboard.Navigator>
    );
  };
  
export default DashboardStackNavigation;