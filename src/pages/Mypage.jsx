/*eslint-disable*/
import React, {useState, useEffect} from "react";
import styled, { createGlobalStyle } from "styled-components";
import Profile from "../elements/Profile";
import axios from "axios"
import UseGetUser from "../hooks/UseGetUser";
import { getCookieToken } from "../Cookie";
import EditInfo from "../components/EditInfo";
import UseCheckCookie from "../hooks/UseCheckCookie";
import { useNavigate } from "react-router-dom";



const Mypage = () => {

  const [ posts, setPosts ] = useState(null)
  const [ edit, setEdit ] = useState(false)
  const navigate = useNavigate()

  const get_posts = async () => {
    const { data } = await axios.get("https://01192mg.shop/api/mypage/posts", {
      headers: {
        "Authorization" : getCookieToken(),
    }
    });
    setPosts(data.data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };

  const user = UseGetUser();
  const cookie = UseCheckCookie();
  
  useEffect(() => {
    get_posts()
  }, [])

  const postDelete = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      apiDelete(id)
    } else {
      null
    }
  }
  

  const apiDelete = async (id) => {
    const response = await axios.delete(`https://01192mg.shop/api/posts/${id}`, {
      headers: {
        "Authorization" : getCookieToken()
      }
    })
    window.location.reload()
  }

  if (user === null) {
    return (
      <div>
      로딩중!
    </div>
      )
  }

  // if (!cookie) {
  //   navigate('/')
  //     }


  return (
    <>
        <GlobalStyle/>
      <StWrapper>

        {
          edit ? <EditInfo user={user} edit={edit} setEdit={setEdit}></EditInfo> : null
        }

        <StHeader>
        <div style={{display:'flex', height:'100%', width:'100%', alignItems:'center'}}>
        <StProfile user={user}>
        </StProfile>
        <StNameDiv>
          <StUserName>{user.username}</StUserName>
          <StUserName style={{fontWeight:'400', fontSize:'20px'}}>게시물 {posts?.length}개</StUserName>
          <StUserName style={{paddingRight:'60px', fontWeight:'500', fontSize:'24px'}}>{user.nickname}</StUserName>
        </StNameDiv>
        <StEditButton onClick={() => {
          setEdit(true)
        }}>
          정보수정
        </StEditButton>
        </div>
        </StHeader>

      <StList>
          {
            posts?.map((stuff, i) => {
             return  <StPost onClick={() => {
              postDelete(stuff.id)
             }} stuff={stuff} key={i}></StPost>
            })
          } 

        </StList>
      </StWrapper>
    </>
  );
};

export default Mypage;


const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
    background-color: ecdede;
    overflow-x: hidden;
	}
  `;

const StWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StHeader = styled.div`
  width:800px;
  height:250px;
  border-bottom:1px solid #d7d7d7;
`
const StProfile = styled.div`
  width:150px;
  height:150px;
  border-radius: 200px;
  margin-left:10px;
  margin-top:10px;
  margin-bottom:10px;
  background-image: url(${props => props.user.profileImageUrl});
  background-size: 100% 100%;
`

const StNameDiv = styled.div`
  width:30%;
  display:flex;
  flex-direction:column;
  justify-content: center;
  margin-left:100px;
  
`

const StUserName = styled.span`
  font-weight: 600;
  font-size:30px;
  margin-top:10px;
  width:300px;
`
const StList = styled.div`
  width:800px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top:50px;

`
const StPost = styled.div`
  width:250px;
  height:280px;
  margin-top:20px;
  background-image: url(${props => props.stuff.imageUrl});
  background-size: 100% 100%;
  &:hover {
    /* background-size:105% 105%;*/
  transition: 1s;
  transition: transform 1s;
  filter: brightness(50%);
  }
`

const StDelete = styled.span`
  font-weight:600;
  font-size:18px;
  color:white;
  z-index:4;
  opacity: 0;
  
`

const StEditButton = styled.button`
  width:100px;
  height:50px;
  background-color: #ffffff;
  font-weight: 600;
  color:#4788e3;
  border:2px solid #4788e3;
  font-size:18px;
  cursor: pointer;
  &:hover{
    background-color: #4788e3;
    color:#ffffff;
    transition: 0.8s;
  }
`