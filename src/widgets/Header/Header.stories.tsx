import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import React, { useState } from 'react';

const meta: Meta<typeof Header> = {
  title: 'shared/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => {
    const [isDark, setIsDark] = useState(false);
    return <Header isDark={isDark} setIsDark={setIsDark} />;
  },
};
