import styled, { css } from 'styled-components'

import { BsArrowLeft, MdHome, MdSearch, MdNotifications, MdEmail } from './../../style/icons'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: min(60.1rem, 100%);

  @media ( min-width: 50rem ) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  text-align: left;
  padding: 0.8rem 0 0.9rem 1.3rem;
  background-color: var(--primary);
  border-bottom: 1px solid var(--outline);
  z-index: 2;

  > button {
    padding: 0.8rem;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;

    &:hover {
      background-color: var(--twitter-dark-hover);
    }
  }
`

export const BackIcon = styled(BsArrowLeft)`
  width: 2.4rem;
  height: 2.4rem;
  fill: var(--twitter);
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.7rem;

  > h1 {
    font-size: 1.9rem;
  }

  > span {
    font-size: 1.5rem;
    color: var(--gray);
  }
`

export const BottomMenu = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.8rem min(4.6rem, max(10vw, 1rem));
  background-color: var(--primary);
  border-top: 1px solid var(--outline);

  @media ( min-width: 50rem ) {
    display: none;
  }
`

const iconCSS = css`
  width: 3.1rem;
  height: 3.1rem;
  fill: var(--gray);
  cursor: pointer;

  &:hover,
  &.active {
    fill: var(--twitter);
  }
`

export const HomeIcon = styled(MdHome)`
  ${iconCSS};
`

export const SearchIcon = styled(MdSearch)`
  ${iconCSS};
`

export const BellIcon = styled(MdNotifications)`
  ${iconCSS};
`

export const EmailIcon = styled(MdEmail)`
  ${iconCSS};
`
