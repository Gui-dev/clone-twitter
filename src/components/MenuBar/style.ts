import styled, { css } from 'styled-components'

import { MdHome, MdNotifications, MdEmail, MdFavoriteBorder, MdPerson,
  MdExitToApp, RocketseatIcon
} from './../../style/icons'

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    max-height: 100vh;
    padding: 0.9rem 1.9rem 2rem;
    overflow-y: auto;
  }
`

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`

export const Logo = styled(RocketseatIcon)`
  width: 4.1rem;
  height: 4.1rem;
  margin-left: 0.5rem;

  > path {
    fill: var(--twitter);
  }
`

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0.825rem 0;
  border-radius: 2.5rem;
  outline: none;
  cursor: pointer;

  > span {
    display: none;
  }

  & + button {
    margin-top: 1.66rem;
  }

  &:hover {
    background-color: var(--twitter-dark-hover);
  }

  &:hover, &.active {
    span, svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }

  & + button:last-child {
    width: 4rem;
    height: 4rem;
    margin-top: 3.3rem;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  @media (min-width: 1280px) {
    padding: 1rem 1.5rem;

    > span {
      display: inline;
      font-size: 1.9rem;
      font-weight: bold;
      margin-left: 1.9rem;
    }
  }
`

const iconCSS = css`
  flex-shrink: 0;
  color: var(--white);
  width: 3rem;
  height: 3rem;
`

export const HomeIcon = styled(MdHome)`
  ${iconCSS};
`

export const BellIcon = styled(MdNotifications)`
  ${iconCSS};
`

export const EmailIcon = styled(MdEmail)`
  ${iconCSS};
`

export const FavoriteIcon = styled(MdFavoriteBorder)`
  ${iconCSS};
`

export const ProfileIcon = styled(MdPerson)`
  ${iconCSS};
`

export const Botside = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 3.9rem;
  height: 3.9rem;
  background-color: var(--gray);
  border-radius: 50%;
`

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    > strong, span {
      font-size: 1.4rem;
    }

    > span {
      color: var(--gray);
    }
  }
`

export const ExitIcon = styled(MdExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    color: var(--white);
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 3rem;
    cursor: pointer;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`

