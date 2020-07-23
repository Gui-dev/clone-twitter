import React from 'react'
import StickykBox from 'react-sticky-box'

import { Container, SearchWrapper, SearchInput, SearchButton, SearchIcon, Body } from './style'
import List from './../List'
import FollowSuggestion from './../FollowSuggestion'
import News from './../News'

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </SearchWrapper>

      <StickykBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={ [
              <FollowSuggestion
                name="Lucas Silva"
                nickname="@lucas"
              />,
              <FollowSuggestion
                name="Cacau Silva"
                nickname="@cacau"
              />,
              <FollowSuggestion
                name="Juliá Silva"
                nickname="@juju"
              />
            ] }
          />

          <List
            title="O que está acontecendo"
            elements={ [
              <News />,
              <News />,
              <News />,
            ] }
          />

          <List
            title="O que está acontecendo"
            elements={ [
              <News />,
              <News />,
              <News />,
            ] }
          />

          <List
            title="O que está acontecendo"
            elements={ [
              <News />,
              <News />,
              <News />,
            ] }
          />

          <List
            title="O que está acontecendo"
            elements={ [
              <News />,
              <News />,
              <News />,
            ] }
          />
        </Body>
      </StickykBox>
    </Container>
  )
}

export default SideBar
