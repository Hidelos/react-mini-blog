import { func, object } from 'prop-types';
import React from 'react';

const Wrapper = () => <div className="post-list-item-wrapper"></div>;

const TitleText = () => <p className="title-text"></p>;

const PostListItem = (post, onClick, ...props) => (
  <Wrapper onClick={onClick} {...props}>
    <TitleText>{post.title}</TitleText>
  </Wrapper>
);

PostListItem.propTypes = {
  onClick: func,
  post: object,
};

export default PostListItem;
