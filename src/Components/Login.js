import React from "react";
import styled from "styled-components";
import {
  loginWithGoogle,
  showToastError,
  showToastSuccess,
} from "../firebaseConfig/utilFireBase";
import { useNavigate } from "react-router-dom";
const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  button {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 250px;
    border: none;
    padding: 8px;
    border-radius: 10px;
    justify-content: center;

    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;
const Login = () => {
  const navigate = useNavigate();
  async function handleLoginGoogle() {
    let dataUser = await loginWithGoogle();
    if (dataUser) {
      showToastSuccess("Login thành công");
      console.log("dataUsser,", dataUser);
      localStorage.setItem("userDefined", JSON.stringify(dataUser));
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      showToastError("Login thất bại");
    }
  }
  return (
    <LoginWrapper>
      <button onClick={handleLoginGoogle}>
        <span className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU"
            alt=""
          />
        </span>
        <span>Đăng nhập với Google</span>
      </button>
    </LoginWrapper>
  );
};

export default Login;
