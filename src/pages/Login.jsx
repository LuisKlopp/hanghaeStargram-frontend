/*eslint-disable*/
import React, {useState, useReducer} from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import { setAccessToken, setRefreshToken, getCookieToken } from "../Cookie";

axios.defaults.withCredentials = true;


// 로그인 API /api/members/login
// “username”: "iamuser",
// “password”: "1234"

// const reducer = (state, action) => {
  
//   return {
//     ...state,
//     [action.name]: action.value,
//   }
// }


const Login = () => {
  // const [state, setState] = useReducer(reducer, {
  //   userid: "",
  //   password: "",
  // });
  
  // const navigate = useNavigate()
  // const { userid, password } = state;

  // const onChange = (e) => {
  //   setState(e.target);
  // };
  // console.log(state)

  const navigate = useNavigate();
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");

  const onClickLogin = async() => {
    if (username === ""){
      return window.alert("아이디 입력하세요.")
    } else if( password === ""){
      return window.alert("비밀번호를 입력하세요.")
    }
    try{
      let res = await axios({
        method: "POST",
        // url:"http://localhost:3001/posts",
        url:"https://01192mg.shop/api/members/login",
        data: {
          username,
          password
        }, 
        headers: {
            "Authorization" : getCookieToken(),
        }
      })


      if (res.data.success === false){
        alert("아이디 또는 비밀번호를 확인해주세요.")
        window.location.reload()
      } else{
        console.log(res.headers.authorization)
        setAccessToken(res.headers.authorization);
        // setRefreshToken(res.headers['refresh-token'])
        navigate("/main")
        window.location.reload()
      }
    } catch(err){
      throw new Error(err);
    }
  }

  return (
    <>
      <GlobalStyle />
      <StWrapper>
        <StLoginBox>
          <StImgBox></StImgBox>
          <StInputBox name="username" placeholder="ID" onChange={(event) => {SetUsername(event.target.value)}}></StInputBox>
          <StInputBox type="password" name="password" placeholder="비밀번호" onChange={(event) => {SetPassword(event.target.value)}}></StInputBox>
          <StButton username={username} password={password} disabled={username.length === 0 || password.length === 0} onClick={onClickLogin}>로그인</StButton>
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
  background-color: ${({username, password}) => username !== '' && password !== '' ? '#0095f6' : '#ececec' };
  cursor: ${({username, password}) => username !== '' && password !== '' ? 'pointer' : null }
`
