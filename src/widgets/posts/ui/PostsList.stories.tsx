import type { Meta, StoryObj } from '@storybook/react';
import PostsList from './PostsList';

const meta: Meta<typeof PostsList> = {
  title: 'widgets/PostsList',
  component: PostsList,
};

export default meta;
type Story = StoryObj<typeof PostsList>;

export const Default: Story = {
  args: {
    posts: [
      {
        title: 'Первый пост',
        text: 'Немного мыслей о разработке и жизни',
      },
      {
        title: 'Второй пост',
        text: 'Почему архитектура важнее дизайна',
      },
    ],
  },
};
