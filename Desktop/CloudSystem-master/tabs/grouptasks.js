import React, { Component } from 'react'
import { Alert, AppRegistry, StyleSheet, Text, Image, TextInput, View,Button, ListView } from 'react-native'
import { createStackNavigator } from 'react-navigation'

class groupTasks extends React.Component{

  static navigationOptions ={
    tabBarLabel: 'Group tasks',
  };
  
    constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{
        title: 'Become a Data Analyst',
        description: 'Prepare for a career in data analytics. Learn the skills and tools to uncover insights, communicate critical findings, and create data-driven solutions.',
                time: '1-12 June 2018',
},

{
        title: 'Become a Data Analyst',
        description: 'Prepare for a career in data analytics. Learn the skills and tools to uncover insights, communicate critical findings, and create data-driven solutions.',
                time: '1-12 June 2018',
},
{
        title: 'Become a Professional Full Stack Developer',
        description: 'In this program, you’ll prepare for a job as a Full Stack Web Developer, and learn to create websites, and complex server-side web applications that use powerful relational databases to persistently store data.',
                time: '1-20 May 2018',
},
{
        title: 'Become a Data Analyst',
        description: 'Prepare for a career in data analytics. Learn the skills and tools to uncover insights, communicate critical findings, and create data-driven solutions.',
                time: '1-12 June 2018',
},{
        title: 'Become a Data Analyst',
        description: 'Prepare for a career in data analytics. Learn the skills and tools to uncover insights, communicate critical findings, and create data-driven solutions.',
                time: '1-12 June 2018',
},{
        title: 'Become a Data Analyst',
        description: 'Prepare for a career in data analytics. Learn the skills and tools to uncover insights, communicate critical findings, and create data-driven solutions.',
                time: '1-12 June 2018',
},
]),
    };
  }
  _renderRaw(rowData){
    return(
<View >
<Text>{rowData.time}</Text>
<Text>{rowData.title}</Text>
<Text>{rowData.description}</Text>

</View >
    );
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => 
        <View style={{ borderWidth: 2, marginTop:10 ,marginBottom: 10, marginLeft: 10, marginRight:10, borderColor: '#2F4858'}}>

                <Text style={{fontSize:25, fontWeight: 'bold', marginTop:10 ,marginBottom: 10, marginLeft: 15, marginRight:10}}>{rowData.title}</Text>

                <Text style={{fontSize:18, fontFamily:'Tahoma', marginLeft: 5, marginRight:5}}>{rowData.description}</Text>

                <Text style={{marginLeft:240, marginTop:10}}>{rowData.time}</Text>

                <View style={{
                      width: 80, fontSize: 10,
                      alignItems: 'center',
                      backgroundColor: '#0AABF4',marginTop:20,marginLeft: 135, marginBottom:10,
                      }}>
                      <Button
                      onPress={
                        () => this.props.navigation.navigate('URLpage')
                      }
                      title="Send"
                      color= '#F6F8F9'
                      />
                </View>
        </View>
        }
      />
      
    );
  }}

class url extends React.Component {

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

const RootStack = createStackNavigator(
  {
    Grouptasks : groupTasks,
    URLpage: url,
  },
  {
    initialRouteName: 'Grouptasks',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}