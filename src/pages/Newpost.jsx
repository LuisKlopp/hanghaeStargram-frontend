import React, {useState} from 'react'
import styled, { createGlobalStyle } from "styled-components";
import insta_file from '../images/insta_file.PNG'
import { useRef } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, connectStorageEmulator } from "firebase/storage";
import { storage } from "../api/firebase";
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { getCookieToken } from '../Cookie';


const Newpost = () => {

    const navigate = useNavigate()

    const selectFile = useRef("");

    const [file, setFile] = useState('');
    const [ imgurl, setImgUrl ] = useState('')
    const [loading, setUploading] = useState(null);
    const [photoURL, setPhotosURL] = useState([]); 
    const [ content , setContent] = useState('')
    const [files, setFileList] = useState([]); 
    const [percent, setPercent] = useState(false);

        



    const onChangeImage = (e) => {

      for (const image of e.target.files) {
        setFileList((prevState) => [...prevState, image]);
      }

        const reader = new FileReader();
    
        const file = selectFile.current.files[0];
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImgUrl(reader.result);
        };


      }

      const onChange = (e) => {
        setContent(e.target.value)
      }

    
    // --------------------------------------------------------------------------------------------------------//
      // 업로드시 호출될 함수
      const handleImageUpload = async (fileList) => {



        try {
          setUploading(true);
          const urls = await Promise.all(
            fileList?.map(async (file) => {
              const storageRef = ref(storage, `images/${file.name}`);
               await uploadBytesResumable(storageRef, file);
              return getDownloadURL(storageRef);
            })
          ).then((res) => {
            test_function(res)
          }
          ) 
          alert("성공적으로 업로드 되었습니다");
        } 
        
        catch (err) {
          console.error(err);
        }
        setUploading(false);
      };



      
      
      const test_function = async (url) => {
        
        const info = {
          content,
          file: url[0],
        }
        
        if (content !== '' && url !== ''){
          await axios.post("https://01192mg.shop/api/posts", info, {
            headers: {
              "Authorization" : getCookieToken(),
          }
          })
         navigate('/main')
         } else {
             alert('빈칸을 전부 채워주세요')
         }

      }





    
  return (
    <>
        <GlobalStyle/>
        <StWrapper>
            <StpostBox>
            <StpostBox_1>
                <StLabel>
                    <StFilename> <span>새 게시물 만들기</span> </StFilename>  
                </StLabel>
                { imgurl ? <StImgPreview src={imgurl}></StImgPreview> : null }
                <StImageBox ref={selectFile} onChange={onChangeImage } type="file" accept="/image/*"/>
                {percent ? <StLabel2>{file.name}</StLabel2> : <StLabel2>사진을 선택하세요!</StLabel2> }
                <STImageButton onClick={() => selectFile.current.click()}>컴퓨터에서 선택</STImageButton>
            </StpostBox_1>
            <StpostBox_2>
                <StUpload>
                    <UploadButton onClick={() => {
                      handleImageUpload(files)
                      // test_function()
                      }}>공유하기</UploadButton>

                </StUpload>
                <StInput onChange={onChange} placeholder='문구 입력 ...'>
                </StInput>

            </StpostBox_2>
            </StpostBox>
        </StWrapper>
    </>
    
  )
}

export default Newpost

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
    height: 90vh;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow:hidden;
    overflow-x:hidden;
`;

const StpostBox = styled.div`
  width:900px;
  height:550px;
  display: flex;
  justify-content: center;
`

const StpostBox_1 = styled.div`
    background-color: white;
    border: 1px solid #bababa;
    border-radius : 15px;
    width: 500px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: url(${insta_file});
    background-repeat: no-repeat;
    background-position: center;
    // background-size: 10% 10%;
    // background-size : cover;
    // background: no-repeat;
    position:relative;
`;

const StLabel = styled.div`
    margin-top: 10px;
    width: 90%;
    height: 30px;
    border-bottom: solid 1px #bababa;
    position: absolute;
    top: 0;
`;

const StLabel2 = styled.div`
    margin-top: 180px;
    margin-bottom: 20px;
`;

const StImageBox=styled.input`
    // margin-top: 200px;
    display: none;
 
`; 

const STImageButton = styled.button`
    background: #0095F6;
    border: none;
    color: white;
    font-size: 13px;
    width: 120px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
`;

const StImgPreview = styled.img`
  width:100%;
  height:90%;
  position:absolute;
  bottom:0;
  &:hover{
    transform:scale(1.05, 1.05);  /* 가로2배 새로 1.5배 로 커짐 */
    transition: transform 0.5s;  /* 커지는 시간 */
  }
`

const StFilename = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StButton = styled.button`
    width:30%;
    height:30px;
    border:none;
    font-weight:600;
    font-size:18px;
    background: #0095F6;
    border: none;
    color: white;
    cursor: pointer;
`

const StpostBox_2 = styled.div`
  width:300px;
  height:550px;
  border: 1px solid #bababa;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  `

const StUpload = styled.div`
    width:80%;
    margin-top:10px;
    height:30px;
    display: flex;
    justify-content: right;
    border-bottom: 1px solid #bababa;

`

const StInput =styled.textarea`
    width:80%;
    border:none;
    height:300px;
    margin-top:10px;
    font-size:15px;
    padding:10px;
    &:focus {
        outline: none;
    }
    resize:none;
    font-weight:600;
`
const UploadButton = styled.button`
    background-color: #ffffff;
    border:none;
    color:blue;
    font-weight:600;
    cursor:pointer;

`
