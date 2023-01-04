import React from "react";
import styled from "styled-components";
import { UsegetUserContext } from "../Context/AuthContext";
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  -webkit-box-shadow: 3px 3px 8px -4px rgba(0, 0, 0, 0.65);
  box-shadow: 3px 3px 8px -4px rgba(0, 0, 0, 0.65);
  padding: 5px;
  z-index: 1;
  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    span {
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 20px;
    }

    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    align-items: center;

    li {
      padding: 5px 10px;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;
const Navbar = () => {
  let contextData = UsegetUserContext();
  return (
    <NavbarContainer>
      <div className="logo-wrapper">
        <img
          src="https://st2.depositphotos.com/2331871/9338/i/450/depositphotos_93386978-stock-photo-waterfall-in-rain-forest-at.jpg"
          alt=""
        />
        <span>LOGO APP</span>
      </div>
      <ul>
        <li>Create Post</li>
        <li>Show Post</li>
        <li>{contextData?.userDefined ? "Logout " : "Login"}</li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
