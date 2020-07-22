import React from 'react'

import Main from './../../components/Main'
import MenuBar from './../../components/MenuBar'

import { Container, Wrapper, SideBar } from './style'

const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  )
}

export default Home
