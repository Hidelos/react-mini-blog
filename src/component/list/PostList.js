import { func, string } from 'prop-types';
import React from 'react';
import PostListItem from './PostListItem';

const Wrapper = () => <div className="post-list-wrapper"></div>;

const PostList = ({ posts, ...props }) => (
  <Wrapper>
    {posts.map((post, index) => {
      return <PostListItem key={post.id} {...props} />;
    })}
  </Wrapper>
);

PostList.propTypes = {
  key: string,
  post: func,
  onClick: func,
};

export default PostList;
