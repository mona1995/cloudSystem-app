import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, Image, TextInput, View,Button,ScrollView } from 'react-native';
import Expo from 'expo';
import  { StackNavigator } from 'react-navigation';
import mainpage from './mainpage'

class PizzaTranslator extends Component {
    static NavigationOptions = {
    title : 'Main',   
  };

constructor(props) {

super(props);

this.state = {text: ''};

}

render() {
      const { navigate } = this.props.navigation;
return (

<View>
<ScrollView>

<View style={{ marginVertical:10, marginHorizontal: 140 , paddingTop: 60, }}>

<Text style={styles.titleText} onPress={this.onPressTitle}>

SIGN UP ..

</Text>

</View>

<View style={{ marginVertical:20, marginHorizontal: 80 }}>

<Text style={styles.titleText} onPress={this.onPressTitle}>

Full Name:

</Text>

<TextInput style={{height: 25,width:180, borderColor: 'gray', borderWidth: 1,backgroundColor: '',marginBottom: 5}}

placeholder="Name"

onChangeText={(text) => this.setState({text})}

/>

<Text style={styles.titleText} onPress={this.onPressTitle}>

Email Address:

</Text>

<TextInput style={{height: 25,width:180, borderColor: 'gray', borderWidth: 1,backgroundColor: '',marginBottom: 5}}

placeholder="mona.95rr@gmail.com"

onChangeText={(text) => this.setState({text})}

/>

<Text style={styles.titleText} onPress={this.onPressTitle}>

Password:

</Text>

<TextInput style={{height: 25,width:180, borderColor: 'gray', borderWidth: 1}}

placeholder="Password"

onChangeText={(text) => this.setState({text})}

/>

<Text style={styles.titleText} onPress={this.onPressTitle}>

Phone Number:

</Text>

<TextInput style={{height: 25,width:180, borderColor: 'gray', borderWidth: 1}}

placeholder="0558247313"

onChangeText={(text) => this.setState({text})}

/>

<Text style={styles.titleText} onPress={this.onPressTitle}>

University:

</Text>

<TextInput style={{height: 25,width:180, borderColor: 'gray', borderWidth: 1}}

placeholder="Qassim university"

onChangeText={(text) => this.setState({text})}

/>

<Text style={styles.titleText} onPress={this.onPressTitle}>

Major

</Text>

<TextInput style={{height: 25,width:180, borderColor: 'gray', borderWidth: 1}}

placeholder="major"

onChangeText={(text) => this.setState({text})}

/>

<Text style={styles.titleText} onPress={this.onPressTitle}>

Residence

</Text>

<TextInput style={{height: 25,width:180, borderColor: 'gray', borderWidth: 1}}

placeholder="Qassim"

onChangeText={(text) => this.setState({text})}

/>

<Text style={styles.titleText} onPress={this.onPressTitle}>

Exp graduate date:

</Text>

<TextInput style={{height: 25,width:180, borderColor: 'gray', borderWidth: 1}}

placeholder="5/12/2020"

onChangeText={(text) => this.setState({text})}

/>

<Text style={styles.titleText} onPress={this.onPressTitle}>

Credit card Number

</Text>

<TextInput style={{height: 25,width:180, borderColor: 'gray', borderWidth: 1}}

placeholder="Credit card Number"

onChangeText={(text) => this.setState({text})}

/>

<Text style={styles.titleText} onPress={this.onPressTitle}>

Credit card Date

</Text>

<TextInput style={{height: 25,width:180, borderColor: 'gray', borderWidth: 1}}

placeholder="Credit card Date"

onChangeText={(text) => this.setState({text})}

/>

<View style={{


                      width: 80, fontSize: 10,
                      alignItems: 'center',
                      backgroundColor: '#0AABF4',marginTop:20,marginLeft: 50, marginBottom:10, }}>
      <Button
        title="Sign up !"
        onPress={() => navigate('mainpage')}>Navigate to mainpage
      </Button>


</View>

</View>
</ScrollView>
</View>

);

}

}


const NavigationApp =  StackNavigator({
  Home :{ screen : PizzaTranslator},
  mainpage : { screen : mainpage },

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

paddingBottom: 0,

paddingTop:2,

fontFamily: 'Cochin',

fontSize: 15,

fontWeight: 'bold',

},

});

// skip this line if using Create React Native App

AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);

