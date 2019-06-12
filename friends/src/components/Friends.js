import React from 'react'
import styled from 'styled-components'

const FriendsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  margin: 40px 20px;
  color: #222222;

  @media (max-width: 360px) {
    justify-content: center;
    margin: 20px 0;
  }
`

const FriendCard = styled.article`
  width: 100%;
  max-width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin: 0 15px 15px 0;
  padding: 20px 30px;
  border: solid 1px #EEEEEE;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px rgba(238, 238, 238, 0.75)
  }

  @media (max-width: 360px) {
    margin: 0 auto 15px;
  }
`

const FriendField = styled.p`
  font-size: 16px;
  margin: 0 0 16px;
  font-weight: ${props => props.primary ? 600 : 400 }

  & span {
    font-weight: 500;
    display: flex;
    margin: 0 0 6px;
    color: #555555;
    font-size: 12px;
    text-transform: uppercase;
  }
`

const Friend = (props) => {
  const { friend } = props
  return (
    <FriendCard>
      <FriendField primary>{friend.name}</FriendField>
      <FriendField><span>Age</span>{friend.age}</FriendField>
      <FriendField>
        <span>Email</span>
        <a href={`mailto:${friend.email}`}>{friend.email}</a>
      </FriendField>
    </FriendCard>
  )
}

const Friends = (props) => {
  const { friends } = props
  return (
    <FriendsWrapper>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </FriendsWrapper>
  )
}

export default Friends
