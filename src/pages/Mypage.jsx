/*eslint-disable*/
import React, {useState} from "react";
import styled, { createGlobalStyle } from "styled-components";
import Profile from "../elements/Profile";


const Mypage = () => {


  return (
    <>
        <GlobalStyle/>
      <StWrapper>

        <StHeader>
        <div style={{display:'flex', height:'100%', width:'100%', alignItems:'center'}}>
        <StProfile>
        </StProfile>
        <StNameDiv>
          <StUserName>ryu_verpool9</StUserName>
          <StUserName style={{fontWeight:'400', fontSize:'20px'}}>게시물 4개</StUserName>
          <StUserName style={{paddingRight:'60px', fontWeight:'500', fontSize:'24px'}}>류현</StUserName>
        </StNameDiv>
        </div>
        </StHeader>

      <StList>
        <StPost/>
        <StPost/>
        <StPost/>
        <StPost/>
        </StList>
      </StWrapper>
    </>
  );
};

export default Mypage;


const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
    background-color: ecdede;
    overflow-x: hidden;
	}
  `;

const StWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StHeader = styled.div`
  width:800px;
  height:500px;
  border-bottom:1px solid #d7d7d7;
`
const StProfile = styled.div`
  width:150px;
  height:150px;
  border:2px solid black;
  border-radius: 200px;
  margin-left:10px;
  margin-top:10px;
  margin-bottom:10px;
`

const StNameDiv = styled.div`
  width:30%;
  display:flex;
  flex-direction:column;
  justify-content: center;
  margin-left:100px;
  
`

const StUserName = styled.span`
  font-weight: 600;
  font-size:30px;
  margin-top:10px;
`
const StList = styled.div`
  width:800px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top:50px;
  
`
const StPost = styled.div`
  width:250px;
  height:280px;
  border:1px solid black;
  margin-top:20px;
`