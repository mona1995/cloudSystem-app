import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation'

import free from './tabs/freecourse'
//import paid from './tabs/paidcourse'

var MainScreenNavigator = TabNavigator({
  Profile : {screen: free},
  //Notification : {screen: paid},
}, {
  tabBarPosition: 'top',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: 'white',
    activeBackgroundColor: '#0AABF4',
    inactiveTintColor:'white',
    inactiveBackgroundColor: '#4A4A4A',
    labelStyle:{
      fontSize:16,
      padding:10
    }
  }
});

MainScreenNavigator.navigationOptions ={
  title: 'User profile'
};

export default MainScreenNavigator;

