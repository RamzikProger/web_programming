import React from 'react';
import PostCard from '../../../entities/post/ui/PostCrad';

interface Post {
  title: string;
  text: string;
  image?: string;
}

interface PostsListProps {
  posts: Post[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <div
  id="posts"
  className="container mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p, i) => (
        <PostCard key={i} {...p} />
      ))}
    </div>
  );
};

export default PostsList;
