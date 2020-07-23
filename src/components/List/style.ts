import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary);
  border-radius: 1.4rem;
`

export const Item = styled.div`
  padding: 1rem 1.6rem;

  & + div {
    border-top: 1px solid var(--outline);
  }

  &:first-child {
    padding-top: 1.3rem;
  }

  &:last-child {
    padding-bottom: 1.7rem;
  }
`

export const Title = styled.span`
  font-size: 1.9rem;
  font-weight: bold;
`
