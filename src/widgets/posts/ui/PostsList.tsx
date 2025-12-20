import React from "react";
import Post from "../../../entities/post/ui/Post";

interface PostType {
    title: string;
    text: string;
}

interface PostsListProps{
    posts: PostType[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
    return (
       <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 mb-12">

            {posts.map((post, index) => (
                <Post key={index} 
                        title={post.title} 
                        text={post.text}/>
            ))}
        </div>
    );
};
export default PostsList;