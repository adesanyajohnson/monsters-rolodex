import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SeacrhBox } from './components/search-box/search-box.component'

class App extends React.Component
{
  constructor(){
    super();

    this.state = {
      searchField: "",
      monsters : []
    }
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className="App">
        <header>
          <SeacrhBox placeholder="search monsters" handleChange={this.handleChange}></SeacrhBox>
          <br></br>
          <CardList monsters = {filteredMonsters}>
          </CardList>
        </header>
      </div>
    );
  }
}

export default App;
