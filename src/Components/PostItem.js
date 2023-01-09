import React from "react";
import styled from "styled-components";

const PostItemWrapper = styled.div`
  max-width: 350px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 10px;
  -webkit-box-shadow: 5px 4px 14px -9px rgba(0, 0, 0, 0.96);
  box-shadow: 5px 4px 14px -9px rgba(0, 0, 0, 0.96);
  .postItem-img {
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    height: 300px;
  }
  .postItem-heading {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    color: gray;
    padding: 5px 0;
  }
  .postItem-description {
    font-size: 14px;
    letter-spacing: 0.5px;
    line-height: 1.5;
    color: grey;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
    .specific-line {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .postItem-footer {
    display: flex;
    justify-content: space-between;
    color: grey;
    margin-top: 10px;
    font-size: 14px;
  }
`;
const PostItem = ({ postData }) => {
  return (
    <PostItemWrapper>
      <div className="postItem-img">
        <img src={postData?.imgLink[0]} alt="" />
      </div>
      <div className="postItem-heading">{postData.title}</div>
      <div
        className="postItem-description specific-line"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      ></div>
      <div className="postItem-footer">
        <div className="footer-date">Nov 16 2023</div>
        <div className="footer-source">Google.com</div>
      </div>
    </PostItemWrapper>
  );
};

export default PostItem;
