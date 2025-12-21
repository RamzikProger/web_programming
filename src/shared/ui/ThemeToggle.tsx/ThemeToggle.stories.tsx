import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const meta: Meta<typeof ThemeToggle> = {
  title: 'shared/ThemeToggle',
  component: ThemeToggle,
};
export default meta;

type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  render: () => {
    const [isDark, setIsDark] = useState(false);
    return <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />;
  },
};
