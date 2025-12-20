import React from 'react';


interface PostProps {
  title: string;
  text: string;
  image?: string;
}

const Post: React.FC<PostProps> = ({ title, text, image}) => {
    return (
        <article
            className="
                overflow-hidden rounded-xl
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                shadow-sm hover:shadow-lg
                transition hover:-translate-y-1
            "
            >

                
            {image && (
                <img
                src={image}
                alt={title}
                className="h-40 w-full object-cover"
                />
            )}
            <div className="p-5">
                <span className="mb-2 block text-xs uppercase tracking-wide text-gray-400">
                    Блог · 2025
                </span>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
                <p className="text-gray-600 dark:text-gray-400">{text}</p>
                
            </div>
        </article>
    );
};
export default Post;