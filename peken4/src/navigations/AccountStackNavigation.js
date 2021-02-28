import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../screen/Account/Account'

const Account = createStackNavigator()


const AccountStackNavigation = ({navigation}) => {
    return (
      <Account.Navigator screenOptions={{headerShown: false}}>
        <Account.Screen name={'Account'} component={AccountScreen} />
      </Account.Navigator>
    );
  };
  
export default AccountStackNavigation;