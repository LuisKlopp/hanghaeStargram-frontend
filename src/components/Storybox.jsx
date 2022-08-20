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
  border:2px solid black;
  border-radius: 50px;
`

const StUsername = styled.span`
  font-size:15px;
`