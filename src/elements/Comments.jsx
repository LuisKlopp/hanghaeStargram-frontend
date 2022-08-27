/*eslint-disable*/
import React, {useEffect, useState} from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Routes, Route, Link, Redirect, useLocation } from 'react-router-dom'
import axios from 'axios'
import { getCookieToken } from "../Cookie";
import UseGetUser from "../hooks/UseGetUser";
import { deleteContent } from "../redux/modules/commentSlice";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";

const Comments = ({a, user}) => {

  const dispatch = useDispatch()
 

  const deleteComment = (id) => {

  dispatch(deleteContent(id))
  }

  



  let button;
  if (user.username === a.author) {
      button = <StDelete onClick={() => {
        deleteComment(a.id)
      }}>X</StDelete>
  }


  return (


    <>
        <div style={{display:'flex', height:'50px', width:'100%', wordBreak:'break-all', marginTop:'10px'}}>
        <StProfile a={a}>
        </StProfile>
        <StNameDiv>
          <StUserName style={{fontWeight:'600'}}>{a.author}</StUserName>
          <StUserName style={{paddingRight:'60px'}}>{a.content}</StUserName>
        </StNameDiv>
        {button}
        
        </div>
    </>
  );
};

export default Comments;


const StProfile = styled.div`
  width:60px;
  height:50px;
  border-radius: 50px;
  margin-left:10px;
  background-image: url(${(props => props.a.profileImage)});
  background-size: 100% 100%;
  cursor:pointer;
`

const StNameDiv = styled.div`
  width:100%;
  height:70%;
  margin-left:5px;
  display:flex;
  /* text-align: center; */
  flex-direction: column;
  align-items: baseline;
`

const StUserName = styled.span`
  width:100%;
`

const StDelete = styled.span`
  font-weight:600;
  font-size:15px;
  cursor: pointer;
`