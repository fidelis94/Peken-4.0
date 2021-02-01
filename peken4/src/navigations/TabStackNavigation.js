import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStackNavigation from './HomeStackNavigation';
import DashboardStackNavigation from './DashboardStackNavigation'



const Tab = createMaterialBottomTabNavigator();


const TabStackNavigation = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="Market"
          component={HomeStackNavigation}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="home"
                color="#5db075"
                size={20}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Dashboard"
          component={DashboardStackNavigation}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="cart" color="#5db075" size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

export default TabStackNavigation;
  
