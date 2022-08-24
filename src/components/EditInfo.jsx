/*eslint-disable*/
import React, {useState, useRef} from "react";
import styled, { createGlobalStyle } from "styled-components";
import Profile from "../elements/Profile";
import Comments from "../elements/Comments";
import axios from "axios"
import { getCookieToken } from "../Cookie";

const EditInfo = ({user, edit, setEdit}) => {


  const [files, setFileList] = useState([]); 
  const [ imgurl, setImgUrl ] = useState('')
  const selectFile = useRef("");
  const [ nickname , setNickname] = useState('')



  const onChangeImage = (e) => {

    for (const image of e.target.files) {
      setFileList((prevState) => [...prevState, image]);
    }

      const reader = new FileReader();
  
      const file = selectFile.current.files[0];
      console.log(file)
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgUrl(reader.result);
      };

      console.log(files)

    }

    const onChange = (e) => {
      setNickname(e.target.value)
    }




    const handleImageUpload = async (fileList) => {


      try {
        const urls = await Promise.all(
          fileList?.map(async (file) => {
            const storageRef = ref(storage, `profile/${file.name}`);
             await uploadBytesResumable(storageRef, file);
            return getDownloadURL(storageRef);
          })
        ).then((res) => {
          test_function(res)
        }
        ) 
        alert("변경되었습니다!");
      } 
      
      catch (err) {
        console.error(err);
      }
    };



    
    
    const test_function = async (url) => {
      
      const info = {
        nickname,
        profileImage : url[0],
      }

      // if (nickname.length < 2 || nickname.length > 8) {
      //   alert('3글자이상 7글자미만으로 입력해주세요')
      // }
      
      if (nickname !== '' && url !== ''){
        await axios.post("https://01192mg.shop/api/mypage/profile", info, {
          headers: {
            "Authorization" : getCookieToken(),
        }
        })
       navigate('/mypage')
       } else {
           alert('빈칸을 전부 채워주세요')
       }

    }



  return (
    <>


    <Stdiv>

        
        { imgurl ? <StImgPreview src={imgurl}></StImgPreview> : <StProfile user={user}></StProfile> }
        <StImageBox ref={selectFile} onChange={onChangeImage} type="file" accept="/image/*"/>
        <STImageButton onClick={() => selectFile.current.click()}>프로필 변경</STImageButton>
        <StInputDiv>
        <StInput onChange={onChange} placeholder={user.nickname}></StInput>
        <StEditButton onClick={() =>{
          handleImageUpload(files)
        }}>저장!</StEditButton>
        <StEditButton onClick={() => { 
          setEdit(false)
        }}>닫기!</StEditButton>
        </StInputDiv>

    </Stdiv>


    </>
  );
};


export default EditInfo;



const Stdiv = styled.div`
  width:500px;
  height:50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  justify-content: center;
  z-index:3;
  background-color: white;
  border:3px solid #000000;
  min-width:700px;
  max-width:1300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s;
`
// const LeftDiv = styled.div`
//   width:70%;
//   height:100%;
//   background-size: 100% 100%;
//   `


const StProfile = styled.div`
  width:220px;
  height:220px;
  border-radius: 200px;
  margin-left:10px;
  margin-top:10px;
  margin-bottom:10px;
  background-image: url(${props => props.user.profileImageUrl});
  background-size: 100% 100%;
`
const STImageButton = styled.button`
    background: #456d87;
    border: none;
    color: white;
    font-size: 13px;
    width: 120px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
    font-weight:600;
    margin-top:10px;
`;

const StImageBox=styled.input`
    // margin-top: 200px;
    display: none;
 
`; 

const StImgPreview = styled.img`
  &:hover{
    transform:scale(1.05, 1.05);  /* 가로2배 새로 1.5배 로 커짐 */
    transition: transform 0.5s;  /* 커지는 시간 */
  }
  width:220px;
  height:220px;
  border-radius: 200px;
`

const StInput = styled.input`
  width: 200px;
  height:50px;
  border:2px solid #d7d7d7;
  &:focus{
    outline: none;
  }
  font-size: 20px;
  padding-left:20px;
`

const StInputDiv = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:30px;
`

const StEditButton = styled.button`
  width:80px;
  height:50px;
  background-color: #4788e3;
  background-color: #ffffff;
  font-weight: 600;
  color: #4788e3;
  border:2px solid #4788e3;
  font-size:18px;
  cursor: pointer;
  margin-left:10px;
  &:hover{
    background-color: #4788e3;
    color:#ffffff;
    transition: 0.8s;
  }
`