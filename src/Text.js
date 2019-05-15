import React from 'react'
import styled from 'styled-components'
import { hideOverflowStyles } from './utils'

const colorMap = {
  default: '#202124',
  contrast: '#141514',
  subtle: '#4C4D50',
  nonessential: 'rgba(76,77,80, 0.6)'
}
const BaseText = styled.p`
  color: ${props => colorMap[props.textColor]};
  font-family: helvetica, arial, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: ${props => (props.isTight ? 1.125 : 1.5)};
  ${props => props.hideOverflow && hideOverflowStyles}
`

const TextDefault = styled(BaseText)``
const TextSmall = styled(BaseText)`
  font-size: 0.875rem;
`
const TextMicro = styled(BaseText)`
  font-size: 0.75rem;
`
const TextLarge = styled(BaseText)`
  font-size: 1.125rem;
`

const levelMap = {
  default: TextDefault,
  small: TextSmall,
  micro: TextMicro,
  large: TextLarge
}

const Text = ({ color, hideOverflow, isTight, level, ...props }) => {
  const Component = levelMap[level] || TextDefault
  return (
    <Component
      textColor={color}
      hideOverflow={hideOverflow}
      isTight={isTight}
      {...props}
    />
  )
}

Text.defaultProps = {
  color: 'default',
  isTight: false,
  level: 'default'
}

export default Text
