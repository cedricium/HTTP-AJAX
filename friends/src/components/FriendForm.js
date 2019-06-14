import React from 'react'

const FriendForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Name:
          <input
          name="name"
          type="text"
          value={props.activeFriend
            ? props.activeFriend.name
            : props.friend.name
          }
          placeholder="Jane Doe"
          onChange={props.handleChange}
        />
      </label>
      <label>
        Age:
          <input
          name="age"
          type="number"
          value={props.activeFriend
            ? props.activeFriend.age
            : props.friend.age
          }
          placeholder="23"
          onChange={props.handleChange}
        />
      </label>
      <label>
        Email:
          <input
          name="email"
          type="email"
          value={props.activeFriend
            ? props.activeFriend.email
            : props.friend.email
          }
          placeholder="jane.doe@example.com"
          onChange={props.handleChange}
        />
      </label>
      <input 
        type="submit"
        value={
          props.activeFriend
            ? 'Update Friend'
            : 'Add Friend'
        }
      />
    </form>
  )
}

// TODO
//  - check PropTypes

export default FriendForm
