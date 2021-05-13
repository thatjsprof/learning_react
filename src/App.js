import React, { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component'

class App extends Component {
  constructor () {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({ monsters: data })
    })
  }

  render () {
    return (
      <div className="App">
          <input type="search" placeholder="Search Monsters" onChange={(e) => this.setState({ searchField: e.target.value })}/>
          <CardList monsters={this.state.monsters}></CardList>
      </div>
    )
  }
}

export default App;
