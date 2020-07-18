import React from 'react'

import { Container, Retweeted, TweeterIcon, Body, Avatar, Content, Header, Dot,
  Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon
} from './style'

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <TweeterIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <h1>Dryix</h1>
            <span>@dryix</span>
            <Dot />
            <time>18 de julho</time>
          </Header>

          <Description>
            Foguete não tem ré
          </Description>

          <ImageContent />

          <Icons>

            <Status>
              <CommentIcon />
              18
            </Status>

            <Status>
              <RetweetIcon />
              18
            </Status>

            <Status>
              <LikeIcon />
              999
            </Status>

          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet
