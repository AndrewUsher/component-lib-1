import React from 'react'
import styled, { css } from 'styled-components'
import { hideOverflowStyles } from './utils'

const BaseHeadline = styled.div`
  font-family: helvetica, arial, sans-serif;
  letter-spacing: -0.025em;
  color: #202124;
  margin: 0;
  line-height: 1;
  ${props => props.hideOverflow && hideOverflowStyles}
`

const StyledHeadline1 = styled(BaseHeadline)`
  font-size: 3.5rem;
  font-weight: 600;
`

const StyledHeadline2 = styled(BaseHeadline)`
  font-size: 3rem;
  font-weight: 500;
`

const StyledHeadline3 = styled(BaseHeadline)`
  font-size: 2.5rem;
  font-weight: 500;
`

const Headline1 = props => <StyledHeadline1 as="h1" {...props} />
const Headline2 = props => <StyledHeadline2 as="h2" {...props} />
const Headline3 = props => <StyledHeadline3 as="h3" {...props} />

const levelMap = { 1: Headline1, 2: Headline2, 3: Headline3 }

const Headline = ({ hideOverflow, level, ...props }) => {
  const Component = levelMap[level]
  return <Component hideOverflow={hideOverflow} {...props} />
}

Headline.defaultProps = {
  hideOverflow: false,
  level: 1
}

export default Headline
