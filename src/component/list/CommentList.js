import { func, string } from 'prop-types';
import React from 'react';
import CommentListItem from './CommentListItem';

const Wrapper = () => <div className="comment-list-wrapper"></div>;

const CommentList = ({ comments, ...props }) => (
  <Wrapper>
    {comments.map((comment, index) => {
      return <CommentListItem key={comment.id} {...props} />;
    })}
  </Wrapper>
);

CommentList.propTypes = {
  key: string,
  comments: func,
  onClick: func,
};

export default CommentList;
