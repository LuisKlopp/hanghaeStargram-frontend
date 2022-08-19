/*eslint-disable*/
import React, {useState} from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Storybox from "../components/Storybox";
import InstaCard from "../components/InstaCard";
import MainProfile from "../components/MainProfile";
import Members from "../components/Members"
import Detail from "../components/Detail";

const Main = () => {



  return (
    <>
    <GlobalStyle/>

      <StWrapper>

        <StLeftdiv>
          <Storybox></Storybox>
          <InstaCard></InstaCard>
        </StLeftdiv>
        <StRightdiv>
          <MainProfile></MainProfile>
          <Members></Members>
        </StRightdiv>
      </StWrapper>

      
    </>
  );
};

export default Main;

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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StLeftdiv = styled.div`
  /* width:50%; */
  display: flex;
  flex-direction: column;
  margin-top:50px;
`;

const StRightdiv = styled.div`
  /* width:50%; */
  display: flex;
  flex-direction: column;
  margin-left:50px;
  margin-top:-250px;
`;
