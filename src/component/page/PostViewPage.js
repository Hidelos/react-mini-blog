import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CommentList from '../list/CommentList';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import data from '../../data.json';
import { func, string, object } from 'prop-types';

const Wrapper = () => <div className="post-view-wrapper"></div>;
const Container = () => <div className="container"></div>;
const PostContainer = () => <div className="post-container"></div>;
const TitleText = () => <p className="title-text"></p>;
const ContentText = () => <p className="contnet-text"></p>;
const CommentLabel = () => <p className="comment-label"></p>;

const PostViewPage = (...props) => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const post = data.find((item) => {
    return item.id == postId;
  });

  const [comment, setComment] = useState('');

  return (
    <Wrapper>
      <Container>
        <Button
          title="뒤로 가기"
          onClick={() => {
            navigate('/');
          }}
        />
        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>

        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments} />

        <TextInput
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <Button
          title="댓글 작성하기"
          onClick={() => {
            navigate('/');
          }}
        />
      </Container>
    </Wrapper>
  );
};

PostViewPage.propTypes = {
  post: object,
  comment: string,
  onChange: func,
};

export default PostViewPage;
