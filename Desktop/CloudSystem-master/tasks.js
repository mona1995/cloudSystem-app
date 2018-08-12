import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'

import groupTasks from './tabs/grouptasks'
import individualTasks from './tabs/individualtasks'


var MainScreenNavigator = TabNavigator({
  Grouptasks : {screen: groupTasks},
  Individualtasks : {screen: individualTasks},
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
  title: 'Tasks'
};

export default MainScreenNavigator;