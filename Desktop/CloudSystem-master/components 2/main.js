import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  Button,
} from 'react-native';
export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View>
      
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
onPress={
                        () => this.props.navigation.navigate('Courses')
  }            title="Show The Courses "
            color="white"
          />
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
              onPress={this._onPressButton}
              title="Login "
              color="white"
              borderRadius="10"
            />
          </View>
        </View>
        <Button onPress={this.onPressTitle} title="or Sign Up?" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Cochin',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft:25,
  },
  
});
// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);