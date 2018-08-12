import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'

import Password from './tabs/Password'
import Profile from './tabs/Profile'
import Setting from './tabs/Setting'
import Notifications from './tabs/Notifications'


var MainScreenNavigator = TabNavigator({
  Profile : {screen: Profile},
  Password : {screen: Password},
  Notifications : {screen: Notifications},
  Setting : {screen: Setting},
  
}, {
  tabBarPosition: '',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: 'white',
    activeBackgroundColor: '#0AABF4',
    inactiveTintColor:'white',
    inactiveBackgroundColor: '#4A4A4A',
    labelStyle:{
      fontSize:14,
      padding:10,
      flex : 1,
    }
  }
});

MainScreenNavigator.navigationOptions ={
  title: 'User profile'
};

export default MainScreenNavigator;