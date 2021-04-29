import { Meta, Story } from '@storybook/react'

import Header, { HeaderProps } from '.'

export default {
  title: 'molecules/Header',
  component: Header,
  argTypes: {}
} as Meta

const Template: Story<HeaderProps> = (args) => {
  return <Header {...args} />
}

export const Default = Template.bind({})
Default.args = {}
