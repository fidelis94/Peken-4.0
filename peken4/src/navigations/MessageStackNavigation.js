import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MessageScreen from '../screen/Message/Message'

const Message = createStackNavigator()


const MessageStackNavigation = ({navigation}) => {
    return (
      <Message.Navigator  screenOptions={{headerShown: false}}>
        <Message.Screen name={'Message'} component={MessageScreen} />
      </Message.Navigator>
    );
  };
  
export default MessageStackNavigation;