import React from 'react'

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon,
  Followage
} from './style'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton>
          Editar Perfil
        </EditButton> */}
        <h1>Gui Silva</h1>
        <h2>@dryix</h2>

        <p>
          Developer
          <a href="https://github.com/Gui-dev" target="_blank">
            Github
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 05 de setembro 1984
          </li>
        </ul>

        <Followage>
          <span>seguindo <strong>94</strong></span>
          <strong>672 <span>seguidores</span></strong>
        </Followage>
      </ProfileData>
    </Container>
  )
}

export default ProfilePage
