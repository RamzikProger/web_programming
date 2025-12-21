import React, { useState } from 'react';
import Button from '../../../shared/ui/Button/Button';

interface PostCardProps {
  title: string;
  text: string;
  image?: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, text, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-xl dark:bg-gray-800">
      {image && (
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>

        <p
          className={`text-gray-600 dark:text-gray-400 transition-all ${
            expanded ? '' : 'line-clamp-3'
          }`}
        >
          {text}
        </p>

        <div className="mt-4">
          <Button
            variant="secondary"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Свернуть' : 'Читать'}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
