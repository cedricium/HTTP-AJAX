import React from 'react';
import './App.css';
import axios from 'axios'

import Friends from './components/Friends'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      error: '',
    }
    this.getFriends = this.getFriends.bind(this)
  }

  componentDidMount() {
    this.getFriends()
  }

  async getFriends() {
    try {
      const { data } = await axios.get('http://localhost:5000/friends')
      this.setState({ friends: data })
    } catch (error) {
      this.setState(error)
    }
  }

  render() {
    return (
      <div className="App">
        <Friends friends={this.state.friends} />
      </div>
    )
  }
}

export default App;
