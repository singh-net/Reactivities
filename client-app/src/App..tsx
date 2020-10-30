import React, { Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import './App.css';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'


class App extends Component {
  state = {
    values: []
  }

  componentDidMount() {
    axios.get('http://localhost:5003/api/values')
      .then((response) => {
        this.setState({
          values: response.data
        })
      })

  }
  render() {
    return (
      <div className="App">

        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>

        <List>
          <ul>
            {this.state.values.map((value: any) => (
              <List.Item key={value.id}>{value.name}</List.Item>
            ))}
          </ul>

        </List>



      </div>
    )

  }
}
export default App;
