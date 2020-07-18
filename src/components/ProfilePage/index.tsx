import React from 'react'

import Feed from './../../components/Feed'

import { Container, Banner, Avatar, ProfileData, EditButton, LocationIcon, CakeIcon,
  Followage
} from './style'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outline>
          Editar Perfil
        </EditButton>
        <h1>Gui Silva</h1>
        <h2>@dryix</h2>

        <p>
          Developer -
          <a href="https://github.com/Gui-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />

    </Container>
  )
}

export default ProfilePage
