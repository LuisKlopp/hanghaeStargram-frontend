import React, {useState, useReducer} from "react";
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from "styled-components";
import axios from 'axios'

// 회원가입 /api/members/signup
// “username”: "iamuser",
// “nickname”: “aaa”,
// “password”: "1234"

// const reducer = (state, action) => (
//       {
//         ...state,
//         [action.name]: action.value,
//       }
//   );

export const Signup = () => {
    const navigate = useNavigate();
    // const [state, setState] = useReducer(reducer, {
    //     userid: "",
    //     password: "",
    //     nickname: "",
    //     username:"",
    //   });
    
    //   const { userid, password, nickname, username} = state;
    
    //   const onChange = (e) => {
    //     setState(e.target);
    //   };
  // const [email, setEmail] = useState("");

  // API 넘겨야 될 필수정보
  const [username, SetUsername] = useState("");
  const [nickname, SetNickname] = useState("");
  const [password, SetPassword] = useState("");
  
  // 유효성 메세지
  const [usernameMessage, SetUsernameMessage] = useState("");
  const [passwordMessage, SetPasswordMessage] = useState("");
  const [nicknameMessage, SetNicknameMessage] = useState("");
  // 유효성 검사
  const [isUsername, SetIsUsername] = useState(false);
  const [isNickname, SetIsNickname] = useState(false);
  const [isPassword, SetIsPassword] = useState(false);


  const handleUsername = (event) => {
    SetUsername(event.target.value);
    if (event.target.value < 2 || event.target.value > 5) {
      SetUsernameMessage('2~5 글자 미만으로 입력해주세요.');
      SetIsUsername(false);
    } else {
      SetUsernameMessage('올바른 형식입니다.');
      SetIsUsername(true);
    }
  }

  const handleNickname = (event) => {
    SetNickname(event.target.value)
    if (event.target.value < 2 || event.target.value > 10) {
      SetNicknameMessage('2~10 글자 미만으로 입력해주세요.');
      SetIsNickname(false);
    } else {
      SetNicknameMessage('사용가능한 닉네임입니다.');
      SetIsNickname(true);
    }
  }

  const handlePassword = (event) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = event.target.value
    SetPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
      SetPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.')
      SetIsPassword(false)
    } else {
      SetPasswordMessage('사용가능한 비밀번호 입니다.)')
      SetIsPassword(true)
    }
  }


  const onSubmitHandler  = async (event) => {
    event.preventDefault();
    console.log("회원가입버튼 " ,username, nickname, password)
    if (username === ""){
      return window.alert("성명을 입력 해주세요.")
    }  else if (nickname === "") {
      return window.alert("사용자 이름을 입력 해주세요.")
    } else if (password === "") {
      return window.alert("패스워드를 입력 해주세요.")
    }
    
    const userInfo = {
      username,
      nickname,
      password,
    }
    console.log("회원가입유저정보 ",userInfo)
    if (userInfo) {
      // /api/members/signup
      axios.post("http://localhost:3001/posts", userInfo)
        .then((res) => {
          console.log(res.data)// 쿠키에 토큰 저장
        });
      alert('회원가입이 완료되었습니다')
      SetUsername("");
      SetNickname("");
      SetPassword("");
      navigate('/login')
    } else{
      alert("입력 정보를 다시 확인하세요.")
    }
  }

  return (
    <>
    <GlobalStyle/>
        <StWrapper>
            <StSignupBox>
                <StImgBox/>
                {/* <StInputBox name="email"  value={email} placeholder="휴대폰 또는 이메일 주소" onChange={handleEmail}/> */}
                <StInputBox name="username"  value={username} placeholder="성명" onChange={handleUsername}/>
                {username.length > 0 && <span className={`message ${isUsername ? 'success' : 'error'}`}>{usernameMessage}</span>}
                <StInputBox name="nickname"  value={nickname} placeholder="사용자 이름" onChange={handleNickname}/>
                {nickname.length > 0 && <span className={`message ${isNickname ? 'success' : 'error'}`}>{nicknameMessage}</span>}
                <StInputBox name="password"  type="password" value={password} placeholder="비밀번호" onChange={handlePassword}/>
                {password.length > 0 && (<span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>)}
                <StButton onClick={onSubmitHandler}>가입</StButton>
            </StSignupBox>
            <StLoginBox>계정이 있으신가요? <span style={{color:'#0095f6', marginLeft:'10px', fontWeight:'600', cursor:'pointer'}} onClick={() => {
              navigate('/login')
            }}>로그인</span></StLoginBox>
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
    border: 1px solid #dbdbdb;
    width: 400px;
    height: 600px;
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
    border-radius: 7px;
    background-color: ${({userid, password, username, nickname}) => userid !== '' && password !== '' && username !== '' && nickname !== ''? '#0095f6' : '#ececec' };
    cursor: ${({userid, password, username, nickname}) => userid !== '' && password !== '' && username !== '' && nickname !== '' ? 'pointer' : null}
`;

const StLoginBox = styled.div`
    width: 400px;
    height: 10vh;
    margin-top: 15px;
    background-color: white;
    border: 1px solid #dbdbdb;
    border-radius: 1px solid #bababa;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`;