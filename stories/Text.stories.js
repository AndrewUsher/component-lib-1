import React from 'react'
import { storiesOf } from '@storybook/react'
import TextDemo from './components/TextDemo'

storiesOf('Text', module)
  .add('Default', () => <TextDemo />)
  .add('Default Contrast', () => <TextDemo color="contrast" />)
  .add('Default Subtle', () => <TextDemo color="subtle" />)
  .add('Default Nonessential', () => <TextDemo color="nonessential" />)
  .add('Default Tight', () => <TextDemo isTight />)
  .add('Small', () => <TextDemo level="small" />)
  .add('Small Contrast', () => <TextDemo level="small" color="contrast" />)
  .add('Small Subtle', () => <TextDemo level="small" color="subtle" />)
  .add('Small Nonessential', () => (
    <TextDemo level="small" color="nonessential" />
  ))
  .add('Small Tight', () => <TextDemo level="small" isTight />)
  .add('Micro', () => <TextDemo level="micro" />)
  .add('Micro Contrast', () => <TextDemo level="micro" color="contrast" />)
  .add('Micro Subtle', () => <TextDemo level="micro" color="subtle" />)
  .add('Micro Nonessential', () => (
    <TextDemo level="micro" color="nonessential" />
  ))
  .add('Micro Tight', () => <TextDemo level="micro" isTight />)
  .add('Large', () => <TextDemo level="large" />)
  .add('Large Contrast', () => <TextDemo level="large" color="contrast" />)
  .add('Large Subtle', () => <TextDemo level="large" color="subtle" />)
  .add('Large Nonessential', () => (
    <TextDemo level="large" color="nonessential" />
  ))
  .add('Large Tight', () => <TextDemo level="large" isTight />)
  .add('With hideOverflow', () => <TextDemo hideOverflow />)
