/*eslint-disable*/
import React, {useState} from "react";
import styled, { createGlobalStyle } from "styled-components";


const Mypage = () => {


  return (
    <>
        <GlobalStyle/>
      <StWrapper>
        <StHeader>

        </StHeader>
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
  height: 90vh;
  display: flex;
  justify-content: center;
`;

const StHeader = styled.div`
  width:50%;
  height:25vh;
  border-bottom:1px solid #d7d7d7;
`
