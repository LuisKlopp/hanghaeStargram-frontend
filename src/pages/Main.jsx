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
import { getCookieToken } from "../Cookie";
import UseCheckCookie from "../hooks/UseCheckCookie";
import UseGetUser from "../hooks/UseGetUser";
import { useNavigate } from "react-router-dom";

const Main = () => {

  const navigate = useNavigate()
  const [ posts, setPosts ] = useState(null)
  const [ modal, setModal ] = useState(false)

  const cook = UseCheckCookie()
  const user = UseGetUser();
    

  const get_posts = async () => {
    const { data } = await axios.get("https://01192mg.shop/api/posts");
    // console.log(data)
    setPosts(data.data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };

  useEffect(() => {
    get_posts()
  }, [])

  if (posts === null) {
    return (
      <StWrapper>
        <span style={{fontSize:'30px'}}>
        로딩중
        </span>
      </StWrapper>
    )
  }

  return (
    <>
    <GlobalStyle modal={modal}/>
      <StWrapper>


        <StLeftdiv>
          <Storybox></Storybox>
          {
            posts.map((stuff, i) => {
             return  <InstaCard stuff={stuff} key={i} stuff_key={stuff.id} modal={modal} setModal={setModal} i={i} posts={posts}/>
            })
          } 
        </StLeftdiv>


        <StRightdiv>
          <StRightdiv_1>
          <MainProfile onClick={() => { navigate('/mypage')}} user={user}></MainProfile>
          <Members ></Members>
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
  background-color: #fafafa;
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
  margin-left:50px;
  position:relative;
  `;

const StRightdiv_1 = styled.div`
  position:fixed;
  top: 0;
  margin-top:150px;
`
