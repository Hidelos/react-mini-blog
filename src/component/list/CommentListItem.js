import { object } from 'prop-types';
import React from 'react';

const Wrapper = () => <div className="comment-list-item-wrapper"></div>;

const ContentText = () => <p className="content-text"></p>;

const CommentListItem = (comment, ...props) => (
  <Wrapper>
    <ContentText {...props}>{comment.content}</ContentText>
  </Wrapper>
);

CommentListItem.propTypes = {
  comment: object,
};

export default CommentListItem;
