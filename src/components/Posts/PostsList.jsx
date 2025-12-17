import React from "react";
import Post from "./Post";

const PostsList = ({ posts }) => {
    return (
        <div className="posts container">
            {posts.map((post, index) => (
                <Post key={index} 
                        title={post.title} 
                        text={post.text}/>
            ))}
        </div>
    );
};
export default PostsList;