import React, {useEffect,useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from 'axios';

const UseGetComment = (id) => {
  const [comment, setComment] = useState(null)

  const readcomment = async () => {
    const res = await axios.get(`https://01192mg.shop/api/comments/${id}`);
    setComment(res.data)
    return comment
  }
  
  useEffect(() => {
    readcomment()
  }, [])
  
  console.log(comment)

  return comment
}

export default UseGetComment