import React, { Component } from 'react'
import { Alert, AppRegistry, StyleSheet, Text, Image, TextInput, View,Button } from 'react-native'

export default class App extends React.Component {
constructor(props) {
super(props);
this.state = {text: ''};
}
render() {
return (
<View>
<View style={{ marginVertical:10, marginHorizontal: 10 , paddingTop: 60, }}>
<Text style={styles.titleText} onPress={this.onPressTitle}>
URL Answers
</Text>
</View>
<View style={{ marginVertical:20, marginHorizontal: 10 }}>
<Text style={styles.titleText} onPress={this.onPressTitle}>
Link 1:
</Text>
<TextInput style={{height: 30,width:200, borderColor: 'gray', borderWidth: 1,backgroundColor: '',marginBottom: 5}}
onChangeText={(text) => this.setState({text})}
/>
<Text style={styles.titleText} onPress={this.onPressTitle}>
Link 2:
</Text>
<TextInput style={{height: 30,width:200, borderColor: 'gray', borderWidth: 1,backgroundColor: '',marginBottom: 5}}
onChangeText={(text) => this.setState({text})}
/>
<Text style={styles.titleText} onPress={this.onPressTitle}>
Link 3:
</Text>
<TextInput style={{height: 30,width:200, borderColor: 'gray', borderWidth: 1}}
onChangeText={(text) => this.setState({text})}
/>
<Text style={styles.titleText} onPress={this.onPressTitle}>
Link 4:
</Text>
<TextInput style={{height: 30,width:200, borderColor: 'gray', borderWidth: 1}}
onChangeText={(text) => this.setState({text})}
/>

<View style={{
width: 80, fontSize: 10,
alignItems: 'center',
backgroundColor: '#0AABF4',marginTop:20,
}}>
<Button
onPress={() => {
   Alert.alert('Your answers are sent..Good luck');
 }}
title="Send"
color= '#F6F8F9'
/>
</View>
</View>
</View>
);
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