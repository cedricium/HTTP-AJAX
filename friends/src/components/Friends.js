import React from 'react'

const Friend = (props) => {
  const { friend } = props  
  return (
    <div>
      <p>{friend.name}</p>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
    </div>
  )
}

const Friends = (props) => {
  const { friends } = props
  return (
    <div>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  )
}

export default Friends
