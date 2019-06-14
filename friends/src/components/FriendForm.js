import React from 'react'

class FriendForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form onSubmit={this.props.addFriend}>
        <label>
          Name:
            <input
            name="name"
            type="text"
            value={this.props.friend.name}
            placeholder="Jane Doe"
            onChange={this.props.handleChange}
          />
        </label>
        <label>
          Age:
            <input
            name="age"
            type="number"
            value={this.props.friend.age}
            placeholder="23"
            onChange={this.props.handleChange}
          />
        </label>
        <label>
          Email:
            <input
            name="email"
            type="email"
            value={this.props.friend.email}
            placeholder="jane.doe@example.com"
            onChange={this.props.handleChange}
          />
        </label>
        <input type="submit" value="Add Friend" />
      </form>
    )
  }
}

export default FriendForm
