import React from 'react'

import { Container, SearchWrapper, SearchInput, SearchButton, SearchIcon, Body } from './style'
import List from './../List'
import FollowSuggestion from './../FollowSuggestion'

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </SearchWrapper>

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
          title="Talvez você curta"
          elements={ [
            <h1>Test</h1>, <h1>Test</h1>, <h1>Test</h1>
          ] }
        />
      </Body>
    </Container>
  )
}

export default SideBar
