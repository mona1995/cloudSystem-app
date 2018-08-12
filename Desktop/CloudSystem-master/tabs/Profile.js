import * as React from 'react';
import { Text,TextInput , View, StyleSheet ,Alert ,BackHandler , ScrollView } from 'react-native';
import { Constants } from 'expo';
import { Container, Content, List, ListItem, InputGroup, Input  , Icon} from 'native-base';
import { Header ,Button ,FontAwesome  } from 'react-native-elements';
import { TabNavigator } from 'react-navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends React.Component {
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
      <View style = {styles.view0}>

      </View>
      <KeyboardAwareScrollView>
      <View style = {styles.view1}>
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <InputGroup>
                                <Icon name='ios-person' />
                                <Input placeholder='EMAIL' />
                            </InputGroup>
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup>
                                <Icon name='ios-phone-portrait' />
                                <Input placeholder='Phone Number' />
                            </InputGroup>
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup>
                                <Icon name='ios-book' />
                                <Input placeholder='Univeristy' />
                            </InputGroup>
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup>
                                <Icon name='ios-contract' />
                                <Input placeholder='Major' />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Icon name='ios-home' />
                                <Input placeholder='Residence' />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Icon name='ios-ribbon' />
                                <Input placeholder='Expected Graduation Year' />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Icon name='ios-photos' />
                                <Input placeholder='Credit Card Number' />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Icon name='ios-contact' />
                                <Input placeholder='Holder Name '/>
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Icon name='ios-timer' />
                                <Input placeholder='Credit Card Date' />
                            </InputGroup>
                        </ListItem>

                        
                    </List>
                </Content>
            </Container>
      </View>
      <View style = {styles.buttonUpdate}>
        <Button 
           style = {styles.buttonUpdate}
           onPress={() => {
              Alert.alert('You tapped the button!');
                          }}
           title = " Update "
            
           />
                   <Button 
           style = {styles.buttonUpdate}
           onPress={() => {
              Alert.alert('You tapped the button!');
                          }}
           title = " Search"
            
           />
           </View>
      </KeyboardAwareScrollView>


      </View>
      

    );
  }
}


const styles =
{


  view1:{
    flexDirection : 'row',
    marginTop : 0,
    
  },
  container7:{
    
    
  },

  text:{
    marginTop : 80 ,
    marginLeft : 20,
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
    marginTop : 100000,
  },

  buttonUpdate:{
    flex : 1,
    marginTop : -20,
  }

}