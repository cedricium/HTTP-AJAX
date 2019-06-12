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
    {friends.map(friend => (
      <Friend key={friend.email} friend={friend} />
    ))}
  )
}

export default Friends
