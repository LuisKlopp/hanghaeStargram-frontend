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

  const [modal, setModal] = useState(false)


  return (
    <>
    <GlobalStyle/>
      <StWrapper>
    {
      modal ? <Detail modal={modal} setModal={setModal}/> : null
    }

        <StLeftdiv>
          <Storybox></Storybox>
          <InstaCard modal={modal} setModal={setModal}></InstaCard>
          <InstaCard modal={modal} setModal={setModal}></InstaCard>
          <InstaCard modal={modal} setModal={setModal}></InstaCard>
        </StLeftdiv>


        <StRightdiv>
          <StRightdiv_1>
          <MainProfile></MainProfile>
          <Members></Members>
          </StRightdiv_1>
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
  position:relative;
`;

const StLeftdiv = styled.div`
  /* width:50%; */
  display: flex;
  flex-direction: column;
  margin-top:50px;
`;

const StRightdiv = styled.div`
  /* width:50%; */
  margin-left:50px;
  position: fixed;
  top: 30%;
  /* width: 100% */
  right: 0;
`;

const StRightdiv_1 = styled.div`
  height:100px;
`
