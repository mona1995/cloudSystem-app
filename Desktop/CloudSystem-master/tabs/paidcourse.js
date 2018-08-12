import React, { Component } from 'react'
import { View, Text, Button, ListView } from 'react-native'

export default class paid extends React.Component{
  static navigationOptions ={
    tabBarLabel: 'Paid Courses'
  }
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{
        title: 'Artificial Intelligence for Trading',
        description: 'Complete real-world projects designed by industry experts, covering topics from asset management to trading signal generation. Master AI algorithms for trading, and build your career-ready portfolio.',
                time: '1-20 May 2018',
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
        <View style={{ borderWidth: 2, marginTop: 1,borderColor: '#2F4858'}}><Text>{rowData.time}</Text>,
                <Text>{rowData.title}</Text>
<Text>{rowData.description}</Text>
        </View>
        }
      />
      
    );
  }}