/*eslint-disable*/
import React, {useState} from "react";
import styled, { createGlobalStyle } from "styled-components";
import Profile from "../elements/Profile";
import Comments from "../elements/Comments";

const Detail = ({modal, setModal, stuff, name, posts}) => {

  const [comment, setComment] = useState("");

  const onChange = (e) => {
    setComment(e.target.value)
  }







  return (
    <>

    <StContainer>
    <Stdiv>
      <LeftDiv stuff={stuff}></LeftDiv>
      <RightDiv>
        <RightProfileDiv style={{display:'flex'}}>
        <Profile></Profile>
        <X_button onClick={() => {
          setModal(modal => modal = false)
        }}>X</X_button>
        
        </RightProfileDiv>
        <RightProfileDiv style={{border:'none', height:'100px'}}>
        <span style={{marginLeft:'20px', lineHeight:'100px'}}>{stuff.content}<span style={{fontWeight:'600', marginLeft:'20px'}}>더보기</span></span>
        <Comments></Comments>
        <SubmitDiv>
        <InputDiv onChange={onChange} placeholder='댓글을 입력하세요!'></InputDiv>
        <InputButton onClick={() => {console.log('dsd')}}  comment={comment} disabled={!comment}>게시</InputButton>
        </SubmitDiv>
        </RightProfileDiv>

      </RightDiv>
    </Stdiv>
    </StContainer>

    </>
  );
};


export default Detail;

const StContainer = styled.div`
  width:100%;
  height:100%;
  background-color: black;
`


const Stdiv = styled.div`
  width:70%;
  height:80%;
  display: flex;
  position: fixed;
  background-color: black;
  z-index:3;
  border:3px solid #000000;
  min-width:700px;
  max-width:1300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s;
`
const LeftDiv = styled.div`
  width:70%;
  height:100%;
  background-image: url(${props => props.stuff.imageUrl});
  background-size: 100% 100%;
  `
const RightDiv = styled.div`
  width:50%;
  height:100%;
  background-color: white;
  display:flex;
  align-items: center;
  flex-direction:column;
  position:relative;
  
`

const RightProfileDiv = styled.div`
  width:80%;
  margin-top:20px;
  border-bottom:2px solid #d7d7d7;
  height:70px;
`

const X_button = styled.button`
  width:30px;
  font-size:30px;
  height:25px;
  background-color: white;
  border: none;
  cursor: pointer;
`
const InputDiv = styled.input`
  width:70%;
  height:38px;
  border:none; 
  font-size:15px;
  &:focus {
    outline:none;
  }
`

const InputButton =styled.button`
  width:20%;
  height:40px;
  background-color: #ffffff;
  color: ${({comment}) => comment ? '#001aff' : '#8c8c8cddd' };
  font-weight: 600;
  font-size:15px;
  border:none;
  cursor: ${({comment}) => comment ? 'pointer' : null }
`

const SubmitDiv = styled.div`
  width:80%;
  height:40px;
  bottom:0;
  position:absolute;
  display: flex;
  border-top:1px solid #d7d7d7;
  justify-content: space-between;
`