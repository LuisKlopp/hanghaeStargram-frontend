/*eslint-disable*/
import React, {useEffect, useState} from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Routes, Route, Link, Redirect, useLocation } from 'react-router-dom'
import axios from 'axios'
import { getCookieToken } from "../Cookie";

const Comments = ({comments, stuff, a}) => {

  const deleteComment = async (id) => {
    const response = await axios.delete(`https://01192mg.shop/api/comments/${id}`, {
      headers: {
        "Authorization" : getCookieToken()
      }
    })
    alert('삭제되었습니다')
    window.location.reload()
  }






  return (


    <>
        <div style={{display:'flex', height:'50px', width:'100%', wordBreak:'break-all'}}>
        <StProfile a={a}>
        </StProfile>
        <StNameDiv>
          <StUserName style={{fontWeight:'600'}}>{a.author}</StUserName>
          <StUserName style={{paddingRight:'60px'}}>{a.content}</StUserName>
        </StNameDiv>
        <StDelete onClick={() => {
          deleteComment(a.id)
        }}>X</StDelete>
        
        </div>
    </>
  );
};

export default Comments;


const StProfile = styled.div`
  width:50px;
  height:50px;
  border-radius: 50px;
  margin-left:10px;
  background-image: url(${(props => props.a.profileImg)});
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
`

const StUserName = styled.span`
  width:100%;
`

const StDelete = styled.span`
  font-weight:600;
  font-size:15px;
  cursor: pointer;
`