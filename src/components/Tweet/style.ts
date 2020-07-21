import styled, { css } from 'styled-components'

import { RiChat4Line, RocketseatIcon, MdFavorite  } from './../../style/icons'

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 1.4rem 1.6rem;
  border-bottom: 1px solid var(--outline);
`

export const Retweeted = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
`

export const TweeterIcon = styled(RocketseatIcon)`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.9rem;
  margin-left: 3.5rem;

  > path {
    fill: var(--gray);
  }
`

export const Body = styled.div`
  display: flex;
  position: relative;
  margin-top: 0.3rem;
`

export const Avatar = styled.div`
  flex-shrink: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 4.9rem;
  height: 4.9rem;
  border-radius: 50%;
  background-color: var(--gray);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0.2rem;
  padding-left: 5.9rem;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  white-space: nowrap;

  > h1 {
    margin-right: 0.5rem;
  }

  > h1, span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  > span, time {
    color: var(--gray);
  }

  > time {
    font-size: 1.2rem;
  }
`

export const Dot = styled.div`
  width: 0.2rem;
  height: 0.2rem;
  margin: 0 1rem;
  background-color: var(--gray);
`

export const Description = styled.p`
  font-size: 1.4rem;
  margin-top: 0.4rem;
`

export const ImageContent = styled.div`
  width: 100%;
  height: min(28.5rem, max(17.5rem, 41vw));
  margin-top: 1.2rem;
  background-color: var(--outline);
  border-radius: 1.4rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 1.1rem auto 0;

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (min-width: 33rem) {
    width: 63%;
  }
`

export const Status = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: var(--gray);

  > svg {
    margin-right: 0.5rem;
  }

  &:nth-child(1) {
    &, > svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    color: var(--retweet);

    > svg path {
      fill: var(--retweet);
    }
  }

  &:nth-child(3) {
    color: var(--like);

    > svg path {
      fill: var(--like);
    }
  }
`

const iconCSS = css`
  width: 1.9rem;
  height: 1.9rem;
`

export const CommentIcon = styled(RiChat4Line)`
  ${iconCSS};
`

export const RetweetIcon = styled(RocketseatIcon)`
  ${iconCSS};
`

export const LikeIcon = styled(MdFavorite)`
  ${iconCSS};
`

