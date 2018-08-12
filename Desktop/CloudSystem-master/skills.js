
import React, { Component } from 'react';

import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, ListView, Button, TextInput } from 'react-native';

export default class Touchables extends Component {

constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{
        title: 'skills achived',
        description: '-  ',
},

{
        title: 'skill not take',
        description: '',
},

 
]),
    };
  }
  _renderRaw(rowData){
    return(



<View >
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
                      backgroundColor: '#0AABF4',marginTop:20,                            marginLeft: 135, 
                      marginBottom:10,
                      }}>
                     
                      
                   
                </View>
        </View>
        }
      />
      
    );
  }}