import { css } from '@emotion/react'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { Meta, Story } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '.'

export default {
  title: 'atoms/Button',
  component: Button,
  decorators: [withKnobs],
  argTypes: {}
} as Meta

const Template: Story<ButtonProps> = () => {
  const label = text('children', 'BUTTON')
  const size = select('size', ['small', 'medium', 'big'], 'medium')
  const theme = select('theme', ['primary', 'secondary', 'tertiary'], 'primary')
  const disabled = boolean('disabled', false)
  const width = text('width', '')

  return (
    <Button size={size} theme={theme} disabled={disabled} width={width} onClick={action('onClick')}>
      {label}
    </Button>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  theme: 'secondary',
  children: 'Secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  theme: 'tertiary',
  children: 'Tertiary'
}

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Small</div>
        <Button size="small">BUTTON</Button>
      </div>
      <div>
        <div className="description">Medium</div>
        <Button size="medium">BUTTON</Button>
      </div>
      <div>
        <div className="description">Big</div>
        <Button size="big">BUTTON</Button>
      </div>
    </div>
  )
}

export const disabled = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button disabled>PRIMARY</Button>
      </div>
      <div>
        <Button disabled theme="secondary">
          SECONDARY
        </Button>
      </div>
      <div>
        <Button disabled theme="tertiary">
          TERTIARY
        </Button>
      </div>
    </div>
  )
}

export const customSized = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button width="20rem">CUSTOM WIDTH</Button>
      </div>
      <div>
        <Button width="100%">FULL WIDTH</Button>
      </div>
    </div>
  )
}
