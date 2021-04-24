import { Meta, Story } from '@storybook/react'

import CommonLayout, { CommonLayoutProps } from '.'

export default {
  title: 'atoms/CommonLayout',
  component: CommonLayout,
  argTypes: {}
} as Meta

const Template: Story<CommonLayoutProps> = (args) => {
  return (
    <CommonLayout {...args}>
      <div>This is Common Layout !</div>
    </CommonLayout>
  )
}

export const Default = Template.bind({})
Default.args = {}
