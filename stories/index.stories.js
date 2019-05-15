import React from 'react'

import { storiesOf } from '@storybook/react'

import Headline from '../src/Headline'
import Text from '../src/Text'

storiesOf('Headline', module).add('Level 1', () => (
  <>
    <Headline level={1} hideOverflow>
      Hello To The World
    </Headline>
    <Headline level={1}>Hello</Headline>
    <Headline level={1}>Hello</Headline>
  </>
))
