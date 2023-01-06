import React from "react";
import styled from "styled-components";
import PostItem from "./PostItem";

const ListPostWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  grid-gap: 10px;

  justify-content: center;
`;
const ListPost = () => {
  return (
    <ListPostWrapper>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </ListPostWrapper>
  );
};

export default ListPost;
