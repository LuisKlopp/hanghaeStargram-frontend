import React, {useState, useReducer} from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Routes, Route, Link, Redirect, useNavigate } from 'react-router-dom'


// 회원가입 /api/members/signup
// “username”: "iamuser",
// “nickname”: “aaa”,
// “password”: "1234"

const reducer = (state, action) => {
    return {
      ...state,
      [action.name]: action.value,
    }
  }

export const Signup = () => {


  const navigate = useNavigate();

    const [state, setState] = useReducer(reducer, {
        userid: "",
        password: "",
        nickname: "",
        username:"",
      });
    
      const { userid, password, nickname, username} = state;
    
      const onChange = (e) => {
        setState(e.target);
      };
  return (
    <>
    <GlobalStyle/>
        <StWrapper>
            <StSignupBox>
                <StImgBox/>
                <StInputBox name="userid"  placeholder="휴대폰 또는 이메일 주소" onChange={onChange}/>
                <StInputBox name="username"  placeholder="성명" onChange={onChange}/>
                <StInputBox name="nickname"  placeholder="사용자 이름" onChange={onChange}/>
                <StInputBox name="password"  type="password" placeholder="비밀번호" onChange={onChange}/>
                <StButton userid={userid} password={password} nickname={nickname} username={username}>가입</StButton>
            </StSignupBox>
            <StLoginBox>계정이 있으신가요? <span onClick={() => {
              navigate('/login')
            }} style={{color:'#0095f6', marginLeft:'10px', fontWeight:'600', cursor:'pointer'}}>로그인</span></StLoginBox>
        </StWrapper>
    </>
  )
}

export default Signup;

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

const StSignupBox = styled.div`
    background-color: white;
    border: 1px solid #bababa;
    width: 400px;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StImgBox = styled.div`
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jKAVNgwwCGBxuMlIQEeiCrNIZm2JA-D_-g&usqp=CAU");
    background-size: 100% 100%;
    height: 130px;
    width: 75%;
    margin-bottom: 30px;
`;

const StInputBox = styled.input`
    background-color: #fafafa;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    &:focus, &:active{  
      outline: none;
    }
    width: 66%;
    height: 40px;
    margin-top: 10px;
    padding-left: 10px;
`;

const StButton = styled.button`
    width: 280px;
    height: 35px;
    margin-top: 30px;
    border: none;
    color: white;
    font-size: 20px;
    background-color: ${({userid, password, username, nickname}) => userid !== '' && password !== '' && username !== '' && nickname !== ''? '#0095f6' : '#ececec' };
    cursor: ${({userid, password, username, nickname}) => userid !== '' && password !== '' && username !== '' && nickname !== '' ? 'pointer' : null}
`;

const StLoginBox = styled.div`
    width: 400px;
    height: 10vh;
    margin-top: 15px;
    background-color: white;
    border-radius: 1px solid #bababa;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`;