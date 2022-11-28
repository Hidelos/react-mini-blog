import { func, string, array } from 'prop-types';
import React from 'react';
import PostListItem from './PostListItem';

const Wrapper = () => <div className="post-list-wrapper"></div>;

const PostList = ({ posts, onClickItem, ...props }) => (
  <Wrapper>
    {posts.map((post, index) => {
      return (
        <PostListItem
          key={post.id}
          onClick={() => {
            onClickItem(post);
          }}
          {...props}
        />
      );
    })}
  </Wrapper>
);

PostList.propTypes = {
  key: string,
  posts: array,
  onClickItem: func,
};

export default PostList;
