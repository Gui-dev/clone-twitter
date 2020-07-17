import React from 'react'

import ProfilePage from './../ProfilePage'
import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon,
  SearchIcon, BellIcon, EmailIcon
} from './style'

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <h1>Gui Silva</h1>
          <span>612 tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className="active"/>
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  )
}

export default Main
