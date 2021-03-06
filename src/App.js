import React, { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox, searchBox } from './components/search-box/search-box.component'

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

  handleChange  = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render () {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
          <SearchBox placeholder="Search Monsters" handleChange={this.handleChange}></SearchBox>
          <CardList monsters={ filteredMonsters }></CardList>
      </div>
    )
  }
}

export default App;
