import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStackNavigation from './HomeStackNavigation';
import DashboardStackNavigation from './DashboardStackNavigation';
import MessageStackNavigation from './MessageStackNavigation';
import AccountStackNavigation from './AccountStackNavigation';
import {TabBarCustomButton} from '../components';
import {COLOR} from '../utils/styles/Color';
import {WIDTH} from '../utils/styles/Dimensions';
import {useSelector} from 'react-redux'



const Tab = createBottomTabNavigator();

const TabStackNavigation = () => {
  const counter = useSelector(state=>state)
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: COLOR.white,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Market"
        component={HomeStackNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? COLOR.white : COLOR.secondary}
              size={WIDTH * 0.08}
              resizeMode="contain"
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardStackNavigation}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name="cart"
              color={focused ? COLOR.white : COLOR.secondary}
              size={WIDTH * 0.08}
            />
          ),
          tabBarBadge: counter.counter > 0 ?counter.counter :false,
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageStackNavigation}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name="message"
              color={focused ? COLOR.white : COLOR.secondary}
              size={WIDTH * 0.075}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackNavigation}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name="account"
              color={focused ? COLOR.white : COLOR.secondary}
              size={WIDTH * 0.08}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStackNavigation;
