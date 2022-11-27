import { func, string } from 'prop-types';
import React from 'react';

const Wrapper = () => <div className="post-list-item-wrapper"></div>;

const TitleText = () => <p className="title-text"></p>;

const PostListItem = (post, ...props) => (
  <Wrapper {...props}>
    <TitleText>{post.title}</TitleText>
  </Wrapper>
);

PostListItem.propTypes = {
  onClick: func,
  title: string.isRequired,
};

export default PostListItem;
