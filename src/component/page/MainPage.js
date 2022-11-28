import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostList from '../list/PostList';
import Button from '../ui/Button';
import data from '../../data.json';
import { func, string, object } from 'prop-types';

const Wrapper = () => <div className="main-wrapper"></div>;

const Container = () => <div className="container"></div>;

const MainPage = (...props) => {
  const {} = props;
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate('/post-write');
          }}
          {...props}
        />
        <PostList
          posts={data}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
        />
      </Container>
    </Wrapper>
  );
};

MainPage.propTypes = {
  title: string,
  onClick: func,
  posts: object,
  onClickItem: func,
};

export default MainPage;
