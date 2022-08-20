/*eslint-disable*/
import React, {useState} from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Routes, Route, Link, Redirect, useLocation } from 'react-router-dom'

const Profile = () => {

  const {pathname} = useLocation();


  
  return (


    <>
        <div style={{display:'flex', height:'50px', width:'100%'}}>
        <StProfile>
        </StProfile>
        <StNameDiv>
          <StUserName>ryu_verpool9</StUserName>
          <StUserName style={{paddingRight:'60px', fontWeight:'500'}}>류현</StUserName>
        </StNameDiv>
        </div>
    </>
  );
};

export default Profile;


const StProfile = styled.div`
  width:50px;
  height:100%;
  border:2px solid black;
  border-radius: 50px;
  margin-left:10px;
  cursor:pointer;
`

const StNameDiv = styled.div`
  width:30%;
  height:70%;
  margin-left:5px;
  display:flex;
  /* text-align: center; */
  flex-direction:column;

`

const StUserName = styled.span`
  font-weight: 600;
`