import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  Button,
  ScrollView,
} from 'react-native';
import  { StackNavigator } from 'react-navigation';
import Expo from 'expo';
import userpage from './userpage'
import tasks from './tasks'
import Courses from './Courses'
//import Home from './App'




 class PizzaTranslator extends Component {
     static NavigationOptions = {
    title : 'Home',   
  };

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <ScrollView>
        <View style={{ marginVertical: 90, marginHorizontal: 85 }}>
        
          <Text style={styles.titleText} onPress={this.onPressTitle}>
     &nbsp; &nbsp; &nbsp;Welcome         </Text>
<Text style={styles.titleText} onPress={this.onPressTitle}>
to your account          </Text>
        </View>

        
<View  style={{
    marginHorizontal: 110,
    width: 160,
    height: 45,
    marginBottom:20,
    backgroundColor: '#2B5BD3',
    borderRadius: 100,
    justifyContent: 'center',
  }}>
        
      <Button
        title="Profile"
        onPress={() => navigate('userpage')}>Navigate to userpage
      </Button>

          
        </View>

        <View  style={{
    marginHorizontal: 110,
    width: 160,
    height: 45,
    marginBottom:20,
    backgroundColor: '#2B5BD3',
    borderRadius: 100,
    justifyContent: 'center',
  }}>
        
      <Button
        title="Tasks"
        onPress={() => navigate('tasks')}>Navigate to tasks
      </Button>
          
        </View>
        <View  style={{
    marginHorizontal: 110,
    width: 160,
    height: 45,
    marginBottom:20,
    backgroundColor: '#2B5BD3',
    borderRadius: 100,
    justifyContent: 'center',
  }}>
        
         
      <Button
        title="Courses"
        onPress={() => navigate('Courses')}>Navigate to Courses
      </Button>
          
        </View>
        </ScrollView>
      </View>
    );
  }
}

const NavigationApp =  StackNavigator({
  Home :{ screen : PizzaTranslator},
  userpage : { screen : userpage },
  tasks : { screen : tasks },
  Courses : { screen: Courses},
},
{
NavigationOptions:{
  headerStyle :{
    marginTop : Expo.Constants.statusBarHeight
  }
}
}
);

export default class App extends React.Component {
  render()
  {
    return <NavigationApp/>;
      }
}



const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Cochin',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft:0,
  },
  
});
// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);