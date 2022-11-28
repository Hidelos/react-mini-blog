import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

import { func, string } from 'prop-types';

const Wrapper = () => <div className="post-write-wrapper"></div>;

const Container = () => <div className="container"></div>;

const PostWritePage = (...props) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <Wrapper>
      <Container>
        <TextInput
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <TextInput
          value={content}
          onchange={(event) => {
            setContent(event.target.value);
          }}
        />
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate('/');
          }}
        />
      </Container>
    </Wrapper>
  );
};

PostWritePage.propTypes = {
  title: string,
  onchange: func,
  content: string,
};

export default PostWritePage;
