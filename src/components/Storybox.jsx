/*eslint-disable*/
import React, {useEffect, useState} from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from 'axios'

const Storybox = () => {

  const [ members, setMembers ] = useState([])


  const get_members = async () => {
    const { data } = await axios.get("https://01192mg.shop/api/members");
    setMembers(data.data)
  };

  useEffect(() => {
    get_members()
  }, [])


  return (
    <>
      <StWrapper>

      {
        members?.map((a, i) => {
      return  <StStory key={i}>
          <StProfile a={a} >
          </StProfile>
          <StUsername>
              {a.nickname}
          </StUsername>
        </StStory>
        })
      }


      </StWrapper>
    </>
  );
};

export default Storybox;

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
    background-color: ecdede;
    
	}
  `;

const StWrapper = styled.div`
  width: 470px;
  height: 100px;
  display: flex;
  overflow: hidden;
  background-color: #ffffff;
  /* align-items: center; */
  border: 1px solid #d7d7d7;
  border-radius: 10px;
`;

const StStory = styled.div`
  width:50px;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left:25px;
`

const StProfile = styled.div`
  width:55px;
  height:55px;
  border-radius: 50px;
  cursor:pointer;
  background-image: url(${(props => props.a.profileImageUrl)});
  background-size : 100% 100%;

`

const StUsername = styled.span`
  font-size:15px;
  font-weight:600;
`