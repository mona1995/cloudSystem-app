import React from 'react';
import { Text, View , StyleSheet , Button , Image} from 'react-native';
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import Expo from 'expo';
import  { StackNavigator } from 'react-navigation';
import { TextInput ,Alert ,BackHandler , ScrollView ,CheckBox } from 'react-native';
import { Constants } from 'expo';
import { Container, Content, List, ListItem, InputGroup, Input  , Icon} from 'native-base';
import { Header ,FontAwesome  } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Courses from './Courses'
import mainpage from './mainpage'
import signup from './signup'
import  { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';



class HomeScreen extends React.Component{
  static NavigationOptions = {
    title : 'Home',   
  };
    render (){
      const { navigate } = this.props.navigation;
      return (
         <View>
      <ScrollView>
        <View style={{ marginVertical: 100, marginHorizontal: 100 }}>
        <Image
            style={{ width: 90, height: 90,marginLeft:45,marginBottom:34 }}
            source={require('./cloud.png')}
          />
          <Text style={styles.titleText} onPress={this.onPressTitle}>
            Welcome
          </Text>
        </View>

        <View  style={{
    marginHorizontal: 95,
    width: 190,
    height: 45,
    marginBottom: 10,
    backgroundColor: '#2B5BD3',
    borderRadius: 100,
    justifyContent: 'center',
  }}>
        
      <Button
        title="Go to courses"
        onPress={() => navigate('Courses')}>Navigate to Courses
      </Button>
        </View>

        <View style={{ marginVertical: 20, marginHorizontal: 90 }}>
          <TextInput
            style={{
              height: 25,
              width: 200,
              borderColor: 'gray',
              borderWidth: 2,
              backgroundColor: '',
              marginBottom: 8,
              borderRadius:90,

            }}
            placeholder=" Email"
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
            style={{
              height: 25,
              width: 200,
              borderColor: 'gray',
              borderWidth: 2,
              borderRadius:90,
            }}
            placeholder=" Password"
            onChangeText={text => this.setState({ text })}
          />

          <View style={{
    marginHorizontal: 55,
    width: 90,
    height: 45,
    marginTop: 10,
    backgroundColor: '#2B5BD3',
    borderRadius: 100,
    justifyContent: 'center',
  }}>
            <Button
              style={styles.button}
              title="Login "
              onPress={() => navigate('mainpage')}>Navigate to mainpage
              color="white"
              borderRadius="10"
            </Button>
          </View>
        </View>
        <Button
        title = "Sign Up?"
         onPress={() => navigate('signup')}>Navigate to signup
        </Button>
        </ScrollView>
      </View>
      );     
}
  }



const NavigationApp =  StackNavigator({
  Home :{ screen : HomeScreen},
  Courses : { screen: Courses},
  mainpage : { screen : mainpage },
  signup : { screen : signup},
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


const style = StyleSheet.create({
  container:{
      flex : 1,
      alignItems :'center',
      justifyContent :'center',
  }, 
});

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Cochin',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft:25,
  },
  
  
});


