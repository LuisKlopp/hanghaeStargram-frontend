/*eslint-disable*/
import React, {useState, useEffect} from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Storybox from "../components/Storybox";
import InstaCard from "../components/InstaCard";
import MainProfile from "../components/MainProfile";
import Members from "../components/Members"
import Detail from "../components/Detail";
import axios from "axios"

const Main = () => {


  
  const [ posts, setPosts ] = useState(null)
  
  const [ modal, setModal ] = useState(false)

  const get_posts = async () => {
    const { data } = await axios.get("http://localhost:3001/posts");
    // console.log(data)
    setPosts(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };

  useEffect(() => {
    get_posts()
  }, [])

  return (
    <>
    <GlobalStyle modal={modal}/>
      <StWrapper>
    {
      modal ? <Detail modal={modal} setModal={setModal}/> : null
    }

        <StLeftdiv>
          <Storybox></Storybox>
          {
            posts?.map((stuff, i) => {
             return  <InstaCard stuff={stuff} key={i} modal={modal} setModal={setModal}/>
            })
          } 
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
    overflow:${({modal}) => modal === true ? 'hidden' : null};
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
  position:relative;
  `;

const StRightdiv_1 = styled.div`
  top: 0;
`
