import { func, string } from 'prop-types';
import React from 'react';

const Wrapper = () => <div className="comment-list-item-wrapper"></div>;

const ContentText = () => <p className="content-text"></p>;

const CommentListItem = (post, ...props) => (
  <Wrapper>
    <ContentText>{post.title}</ContentText>
  </Wrapper>
);

CommentListItem.propTypes = {
  title: string.isRequired,
};

export default CommentListItem;
