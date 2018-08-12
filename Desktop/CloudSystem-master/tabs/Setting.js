import * as React from 'react';
import { Text,TextInput , View, StyleSheet ,Alert ,BackHandler , ScrollView ,CheckBox } from 'react-native';
import { Constants } from 'expo';
import { Container, Content, List, ListItem, InputGroup, Input  , Icon} from 'native-base';
import { Header ,Button ,FontAwesome  } from 'react-native-elements';
import { TabNavigator } from 'react-navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends React.Component {
    constructor() {
    super();
    this.state = {
      check:false
    }
  }

checkBoxTest()
{
  this.setState({
    check:!this.state.check
  })
}


checkBoxTest1()
{
  this.setState({
    check1:!this.state.check1
  })
}


  render() {
    return (
      <View style={styles.container7}>
      <View style={styles.container}>
              <Button  
              icon={{name: "chevron-left", type: 'font-awesome'}} 
              style = {styles.buttonBack} //back button 
              onPress={() => {
                Alert.alert('You tapped back button!');
                          }}                    
                  />
           <TextInput style = {styles.textStyle} 
           />

           <Button 
           style = {styles.buttonSearch}
           onPress={() => {
              Alert.alert('You tapped the button!');
                          }}
           title = " Search"
            
           />
      </View>

<View style = {styles.View4}>
<CheckBox
style = {styles.C1}
  value = {this.state.check} onChange = {() => this.checkBoxTest()}
/>
<Text style = {styles.T1}>
Send Notifications to my Email 
</Text>
<CheckBox
style = {styles.C2}
  value = {this.state.check1} onChange = {() => this.checkBoxTest1()}
/>
<Text style = {styles.T2}>
Send Notifications to my Mobile 
</Text>
</View>
<View>
            <Button 
           style = {styles.buttonUpdate}
           onPress={() => {
              Alert.alert('You tapped the button!');
                          }}
           title = " Update "
            
           />
           </View>

      </View>
      

    );
  }
}


const styles =
{



  container7:{
    
    
  },

  container: {
    flexDirection : 'row',
    marginTop : 2,
    marginLeft : -15,
    marginRight : -15,
    backgroundColor : '#f5f5f5',
  },

  buttonBack:{    
    flex : 1,    
  }, 

  textStyle: {
    flex : 1,
    backgroundColor : '#f5f5f5',
  },

  buttonSearch:{
    height : 10 ,
    marginTop : 100,
  },

  View4:{
    marginTop : 90,
     marginLeft : 50,
  },


  C1:{

  },

  C2:{
      marginTop : 50,
  },

  T1:{
    fontSize : 18,
  },

  T2:{
    marginTop: 10,
    marginBottom: 50,
    fontSize : 18,
  },
    buttonUpdate:{
    
    marginTop : 100,
  },

}