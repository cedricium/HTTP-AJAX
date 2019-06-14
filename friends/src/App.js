import React from 'react';
import './App.css';
import axios from 'axios'

import Friends from './components/Friends'
import FriendForm from './components/FriendForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      error: '',
      activeFriend: null,
      friend: {
        name: '',
        age: '',
        email: '',
      }
    }
    this.getFriends = this.getFriends.bind(this)
    this.addFriend = this.addFriend.bind(this)
    this.updateFriend = this.updateFriend.bind(this)
    this.setActiveFriend = this.setActiveFriend.bind(this)
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
        ...this.state.friend
      })).data
      this.setState({
        friends,
        friend: {
          name: '',
          age: '',
          email: '',
        }
      })
    } catch (error) {
      this.setState(error)
    }
  }

  async updateFriend(e) {
    e.preventDefault()
    const { activeFriend } = this.state
    try {
      const friends = (await axios.put(`http://localhost:5000/friends/${activeFriend.id}`, {
        ...this.state.activeFriend
      })).data
      this.setState({
        friends,
        activeFriend: null,
      })
    } catch (error) {
      this.setState(error)
    }
  }

  async deleteFriend(e) {
    // TODO
  }

  setActiveFriend(friend) {
    // TODO
    this.setState({ activeFriend: friend })
  }

  handleChange(e) {
    e.persist()
    this.setState(prevState => {
      if (prevState.activeFriend) {
        return {
          activeFriend: {
            ...prevState.activeFriend,
            [e.target.name]: e.target.value
          }
        }
      } else {
        return {
          friend: {
            ...prevState.friend,
            [e.target.name]: e.target.value
          }
        }
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>
          Frens{` `}
          <span role="img" aria-label="let's all be friends">
            👫
          </span>
        </h1>
        <FriendForm
          activeFriend={this.state.activeFriend}
          friend={this.state.friend}
          handleChange={this.handleChange}
          handleSubmit={this.state.activeFriend
            ? this.updateFriend
            : this.addFriend
          }
        />
        {this.state.error && <p className="error-message">{this.state.error}</p>}
        <Friends 
          friends={this.state.friends}
          setActiveFriend={this.setActiveFriend}
        />
      </div>
    )
  }
}

export default App;
