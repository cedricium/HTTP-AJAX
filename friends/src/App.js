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
      name: '',
      age: '',
      email: '',
    }
    this.getFriends = this.getFriends.bind(this)
    this.addFriend = this.addFriend.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.getFriends()
  }

  async getFriends() {
    try {
      const friends = (await axios.get('http://localhost:5000/friends')).data
      this.setState({ friends })
    } catch (error) {
      this.setState(error)
    }
  }

  async addFriend(e) {
    e.preventDefault()
    try {
      const friends = (await axios.post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      })).data
      this.setState({
        friends,
        name: '',
        age: '',
        email: ''
      })
    } catch (error) {
      this.setState(error)
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addFriend}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              placeholder="Jane Doe"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Age:
            <input
              name="age"
              type="number"
              value={this.state.age}
              placeholder="23"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={this.state.email}
              placeholder="jane.doe@example.com"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Add Friend" />
        </form>
        <Friends friends={this.state.friends} />
      </div>
    )
  }
}

export default App;
