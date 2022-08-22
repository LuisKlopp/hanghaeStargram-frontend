/*eslint-disable*/
import React, {useState} from "react";
import styled, { createGlobalStyle } from "styled-components";

const Storybox = () => {


  return (
    <>
      <StWrapper>

        <StStory>
          <StProfile>
          </StProfile>
          <StUsername>
              ryu_ver...
          </StUsername>
        </StStory>

        <StStory>
          <StProfile>
          </StProfile>
          <StUsername>
              ryu_ver...
          </StUsername>
        </StStory>
        <StStory>
          <StProfile>
          </StProfile>
          <StUsername>
              ryu_ver...
          </StUsername>
        </StStory>
        <StStory>
          <StProfile>
          </StProfile>
          <StUsername>
              ryu_ver...
          </StUsername>
        </StStory>
        <StStory>
          <StProfile>
          </StProfile>
          <StUsername>
              ryu_ver...
          </StUsername>
        </StStory>
        <StStory>
          <StProfile>
          </StProfile>
          <StUsername>
              ryu_ver...
          </StUsername>
        </StStory>
        

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
  justify-content: center;
  background-color: #ffffff;
  align-items: center;
  border: 1px solid #d7d7d7;
  border-radius: 10px;
`;

const StStory = styled.div`
  width:15%;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StProfile = styled.div`
  width:85%;
  height:60%;
  border-radius: 50px;
  cursor:pointer;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblGEH-slY1eScff-YLhFFEyTDPhju47lAcA&usqp=CAU');
  background-size : cover;

`

const StUsername = styled.span`
  font-size:15px;
`