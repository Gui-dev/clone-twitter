import styled, { css } from 'styled-components'

import { MdLocationOn, MdCake } from './../../style/icons'

export const Container = styled.div`

`

export const Banner = styled.div`

`

export const Avatar = styled.div`

`

export const ProfileData = styled.div`

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

`

