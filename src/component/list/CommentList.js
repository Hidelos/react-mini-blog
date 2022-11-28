import { array } from 'prop-types';
import React from 'react';
import CommentListItem from './CommentListItem';

const Wrapper = () => <div className="comment-list-wrapper"></div>;

const CommentList = ({ comments, ...props }) => (
  <Wrapper>
    {comments.map((comment, index) => {
      return <CommentListItem key={comment.id} comment={comment} {...props} />;
    })}
  </Wrapper>
);

CommentList.propTypes = {
  comments: array,
};

export default CommentList;
