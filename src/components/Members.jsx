/*eslint-disable*/
import React, {useState} from "react";
import styled, { createGlobalStyle } from "styled-components";
import Profile from "../elements/Profile"

const Members = () => {


  return (
    <>
      <StWrapper>
        <StDiv>
          <StSpan>회원님을 위한 추천</StSpan>
          <StSpan style={{color:'blue', fontSize:'13px', marginRight:'30px'}}>모두보기</StSpan>

        </StDiv>

        
          <Profile/>

      </StWrapper>
    </>
  );
};

export default Members;

const StWrapper = styled.div`
  width: 350px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

const StDiv = styled.div`
  width:100%;
  height:50px;
  display: flex;
  justify-content: space-between;
  margin: 15px 15px 0px 15px;
`

const StSpan = styled.span`
  color:grey;
  font-weight: 600;
`