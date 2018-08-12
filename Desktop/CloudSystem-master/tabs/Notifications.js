import * as React from 'react';
import { Text,TextInput , View, StyleSheet ,Alert ,BackHandler , ScrollView ,CheckBox , TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import { Container, Content, List, ListItem, InputGroup, Input  , Icon} from 'native-base';
import { Header ,Button ,FontAwesome  } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Title', 'Description', 'Sender', 'Response ?'],
      tableData: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd']
      ]
    }
  }

    _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>response</Text>
        </View>
      </TouchableOpacity>
    );
 
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: '#000000'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
        <Text style = {styles1.text}>
        Write Your resopnse kindly then click on respone to the receiver : 
        </Text>
           <TextInput style = {styles1.textStyle} 
           />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, marginTop : 90 , paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '##ffffff' },
  btn: { width: 58, height: 18, margin : 10, backgroundColor: '#0AABF4',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});

const styles1 =
{


  textStyle: {
    marginTop : 40,
    marginBottom : 40,
    flex : 1,
    backgroundColor : '#f5f5f5',
  },

  text1:
  {
    flex : 1,
    marginTop: 100,
  }


}