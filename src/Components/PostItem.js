import React from "react";
import styled from "styled-components";

const PostItemWrapper = styled.div`
  max-width: 350px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 10px;
  -webkit-box-shadow: 5px 4px 14px -9px rgba(0, 0, 0, 0.96);
  box-shadow: 5px 4px 14px -9px rgba(0, 0, 0, 0.96);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  }
  .postItem-footer {
    display: flex;
    justify-content: space-between;
    color: grey;
    margin-top: 10px;
    font-size: 14px;
  }
`;
const PostItem = () => {
  return (
    <PostItemWrapper>
      <div className="postItem-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-uV_N1fE58rcWP0RiEfNfSwr1bZj9nT_QrImUFGk&s"
          alt=""
        />
      </div>
      <div className="postItem-heading">React is awesome</div>
      <div className="postItem-description">
        Related Images: girl woman model beautiful face hair fashion portrait
        nature. Beauty images for free download. Browse or use the ...
      </div>
      <div className="postItem-footer">
        <div className="footer-date">Nov 16 2023</div>
        <div className="footer-source">Google.com</div>
      </div>
    </PostItemWrapper>
  );
};

export default PostItem;
