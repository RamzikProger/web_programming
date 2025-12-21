import type { Meta, StoryObj } from '@storybook/react';
import PostCard from './PostCrad';

const meta: Meta<typeof PostCard> = {
  title: 'entities/Post/PostCard',
  component: PostCard,
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const Default: Story = {
  args: {
    title: 'Заголовок поста',
    text: 'Короткое описание поста, которое заинтересует читателя.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Пост с картинкой',
    text: 'Пример карточки с обложкой.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200',
  },
};
