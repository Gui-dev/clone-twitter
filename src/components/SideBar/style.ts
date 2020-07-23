import styled from 'styled-components'

import { MdSearch } from './../../style/icons'


export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: min(39.9rem, 100%);
  }
`

export const SearchWrapper = styled.form`
  position: fixed;
  top: 0;
  width: min(39.9rem, 100%);
  max-height: 5.7rem;
  padding: 1rem 2.4rem;
  background-color: var(--primary);
  z-index: 2;
`

export const SearchInput = styled.input`
  font-size: 1.4rem;
  width: 100%;
  height: 3.9rem;
  padding: 0 1rem 0 5.2rem;
  background-color: var(--search);
  border-radius: 1.95rem;
  outline: 0;

  &::placeholder {
    color: var(--gray);
  }

  &:focus {
    border: 1px solid var(--twitter);

    ~ button svg {
      fill: var(--twitter);
    }
  }

  ~ button svg {
    position: relative;
    top: -3.3rem;
    left: 1.5rem;
    transition: 180ms ease-in-out;
    z-index: 1;
  }
`

export const SearchButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`

export const SearchIcon = styled(MdSearch)`
  width: 2.7rem;
  height: 2.7rem;
  fill: var(--gray);
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.3rem;
  padding: 5.7rem 2.4rem 20rem;

  > div + div {
    margin-top: 1.5rem;
  }
`

