/*eslint-disable*/
import React, {useState, useReducer} from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";



const reducer = (state, action) => {
  
  return {
    ...state,
    [action.name]: action.value,
  }
}


const Login = () => {
  
  const [state, setState] = useReducer(reducer, {
    userid: "",
    password: "",
  });
  
  const navigate = useNavigate()
  const { userid, password } = state;

  const onChange = (e) => {
    setState(e.target);
  };

  console.log(state)


  return (
    <>
      <GlobalStyle />
      <StWrapper>
        <StLoginBox>
          <StImgBox></StImgBox>
          <StInputBox name="userid" placeholder="ID" onChange={onChange}></StInputBox>
          <StInputBox name="password" placeholder="비밀번호" onChange={onChange}></StInputBox>
          <StButton userid={userid} password={password} disabled={!userid.length && !password.length} onClick={() => {
            console.log('dd')
          }}>로그인</StButton>
        </StLoginBox>
        <StSignupBox>계정이없으신가요? <span style={{color:'#0095f6', marginLeft:'20px', fontWeight:'600', cursor:'pointer'}} onClick={() => {
          navigate('/signup')
        }}>가입하기 버튼</span></StSignupBox>
      </StWrapper>
    </>
  );
};

export default Login;

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
	}
  `;

const StWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StLoginBox = styled.div`
  width: 400px;
  height: 500px;
  background-color: white;
  border: 1px solid #bababa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StImgBox = styled.div`
  width: 60%;
  background-image: url("https://blog.kakaocdn.net/dn/SjvFN/btreg3CYQb2/3uu6ofxOgBcoTDzEU1s6q0/img.png");
  background-size: 100% 100%;
  height: 230px;
  margin-top:-40px;
`;

const StSignupBox = styled.div`
  width: 400px;
  margin-top: 30px;
  height: 10vh;
  background-color: white;
  border: 1px solid #bababa;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  
`;

const StInputBox = styled.input`
  width:70%;
  height:35px;
  margin-top:10px;
  background-color: #fafafa;
  border:1px solid #d4d4d4;
  border-radius: 5px;
  &:focus, &:active{  
    outline: none;
  }
  padding-left:10px;
`

const StButton = styled.button`
  width:70%;
  height:35px;
  margin-top:30px;
  border:none;
  color:white;
  font-weight:600;
  font-size:18px;
  background-color: ${({userid, password}) => userid !== '' && password !== '' ? '#0095f6' : '#ececec' };
  cursor: ${({userid, password}) => userid !== '' && password !== '' ? 'pointer' : null }
`
