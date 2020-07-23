import React from 'react'

import { Container, Avatar, Info, FollowButton } from './style'

interface IFollowSuggestionProps {
  name: string,
  nickname: string
}

const FollowSuggestion: React.FC<IFollowSuggestionProps> = ( { name, nickname } ) => {
  return (
    <Container>
      <div>

        <Avatar />

        <Info>
          <strong>{ name }</strong>
          <span>{ nickname }</span>
        </Info>

      </div>
      <FollowButton outline>Seguir</FollowButton>
    </Container>
  )
}

export default FollowSuggestion
