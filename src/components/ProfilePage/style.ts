import styled, { css } from 'styled-components'

import Button from './../../components/Button'
import { MdLocationOn, MdCake } from './../../style/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  position: relative;
  height: min(33vw, 19.9rem);
  background-color: var(--twitter);
`

export const Avatar = styled.div`
  width: max(4.5rem, min(13.5rem, 22vw));
  height: max(4.5rem, min(13.5rem, 22vw));
  position: absolute;
  bottom: max(-6rem, -10vw);
  left: 1.5rem;
  border: 0.375rem solid var(--primary);
  border-radius: 50%;
  background-color: var(--gray);
`

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: min(calc(10vw + 0.7rem), 6.7rem) 1.6rem 0;

  > h1 {
    font-size: 1.9rem;
    font-weight: bold;
  }

  > h2 {
    font-size: 1.5rem;
    color: var(--gray);
  }

  > p {
    font-size: 1.5rem;
    margin-top: 1.1rem;

    > a {
      text-decoration: none;
      color: var( --twitter );
    }
  }

  ul {
    list-style: none;
    margin-top: 1rem;
    margin-bottom: 1rem;

    > li {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      color: var(--gray);
      margin-bottom: 0.5rem;

      > svg {
        margin-right: 0.5rem;
        fill: var(--gray);
      }
    }
  }
`

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 0.7rem;
  font-size: 1.3rem;
  padding: 0.4rem 1.6rem;

  @media ( min-width: 32rem ) {
    top: 1rem;
    font-size: 1.5rem;
    padding: 1rem 1.9rem;
  }
`

const iconCSS = css`
  width: 2rem;
  height: 2rem;
  color: var(--gray);
`

export const LocationIcon = styled(MdLocationOn)`
  ${iconCSS};
`

export const CakeIcon = styled(MdCake)`
  ${iconCSS};
`

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 1.5rem;
    color: var(--gray);

    strong {
      font-size: 1.5rem;
    }

    & + span {
      margin-left: 2rem;
    }
  }



`

