import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`

export const Tab = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--twitter);
  text-align: center;
  margin-top: 1rem;
  padding: 1.1rem 0 1.5rem;
  border-bottom: 0.2rem solid var(--twitter);
  cursor: pointer;

  &:hover {
    background-color: var(--twitter-dark-hover);
  }
`

export const Tweets = styled.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`
