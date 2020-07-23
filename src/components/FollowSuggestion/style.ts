import styled from 'styled-components'

import Button from './../Button'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }
`

export const Avatar = styled.div`
  width: 4.9rem;
  height: 4.9rem;
  margin-right: 1rem;
  background-color: var(--gray);
  border-radius: 50%;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong, span {
    font-size: 1.4rem;
  }

  > span {
    color: var(--gray);
  }
`

export const FollowButton = styled(Button)`
  padding: 0.6rem 1.7rem;
`
