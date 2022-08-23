import React, {useEffect,useState} from "react";
import axios from 'axios';
import { getCookieToken, getRefreshToken } from "../Cookie";

const UseGetUser = () => {
  const [user, setUser] = useState(null)

  const readUser = async () => {
    const response = await axios.get('https://01192mg.shop/api/members/info', {
      headers: {
        "Authorization" : getCookieToken(),
      }
    })
    setUser(response.data.data)
  }
  
  useEffect(() => {
    readUser()
  }, [])

  return user
}

export default UseGetUser