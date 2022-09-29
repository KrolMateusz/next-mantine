import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@mantine/core';

export default {
  title: 'Example/MantineButton',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: [ 'dark', 'gray', 'red', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange' ],
      default: 'blue'
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => <Button {...args}>{ children }</Button>;

export const Filled = Template.bind({});
Filled.args = {
  children: 'Filled'
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  children: 'Light'
};

export const Oultine = Template.bind({});
Oultine.args = {
  variant: 'outline',
  children: 'Outline',
};

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
  variant: 'default'
};

export const Subtle = Template.bind({});
Subtle.args = {
  variant: 'subtle',
  children: 'Subtle'
};
