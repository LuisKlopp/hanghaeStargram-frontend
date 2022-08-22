/*eslint-disable*/
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Profile from "../elements/Profile";

const Detail = ({modal, setModal, stuff}) => {

  console.log(stuff)

  return (
    <>

    <Stdiv>
      <LeftDiv stuff={stuff}></LeftDiv>
      <RightDiv>
        <RightProfileDiv style={{display:'flex'}}>
        <Profile></Profile>
        <X_button onClick={() => {
          setModal(modal = false)
        }}>X</X_button>
        
        </RightProfileDiv>
        <RightProfileDiv style={{border:'none', height:'100px'}}>
        <Profile></Profile>
        <span style={{marginLeft:'50px', lineHeight:'100px'}}>{stuff.content}<span style={{fontWeight:'600', marginLeft:'20px'}}>더보기</span></span>
        </RightProfileDiv>

      </RightDiv>
    </Stdiv>

    </>
  );
};


export default Detail;


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
`
const LeftDiv = styled.div`
  width:70%;
  height:100%;
  background-image: url(${props => props.stuff.url});
  background-size: 100% 100%;
  `
const RightDiv = styled.div`
  width:50%;
  height:100%;
  background-color: white;
  display:flex;
  align-items: center;
  flex-direction:column;
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
