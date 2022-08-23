import React, {useEffect,useState} from "react";
import axios from 'axios';
import { getCookieToken, getRefreshToken } from "../Cookie";
import { useNavigate } from "react-router-dom";

const UseCheckCookie = () => {
  const [checkCookie, setCheckCookie] = useState(true)
  const navigate = useNavigate();
  const cookie = getCookieToken();


  const check_cookie = () => {
    if (!cookie) {
      navigate('/')
      setCheckCookie(false)
    }
  }
  
  useEffect(() => {
    check_cookie()
  }, [])

  return checkCookie
}

export default UseCheckCookie