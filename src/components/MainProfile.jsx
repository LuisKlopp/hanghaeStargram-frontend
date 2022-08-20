/*eslint-disable*/
import React, {useState} from "react";
import styled, { createGlobalStyle } from "styled-components";
import Profile from "./Profile";


const MainProfile = () => {


  return (
    <>
      <StWrapper>
        <Profile></Profile>
      </StWrapper>
    </>
  );
};

export default MainProfile;


const StWrapper = styled.div`
  width: 350px;
  height: 70px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;
