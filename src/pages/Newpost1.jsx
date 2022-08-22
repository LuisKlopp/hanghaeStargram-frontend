import React, {useState} from 'react'
import styled, { createGlobalStyle } from "styled-components";
import insta_file from '../images/insta_file.PNG'
import { useRef } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, connectStorageEmulator } from "firebase/storage";
import { storage } from "../api/firebase";

import Loader from '../api/Loader';


export const Newpost = () => {

    const selectFile = useRef("");

    const [files, setFileList] = useState([]); // 파일 리스트
    const [file, setFile] = useState('');
    const [percent, setPercent] = useState(false);
    const [ imgurl, setImgUrl ] = useState('')
    const [loading, setLoading] = useState(null);
    const [photoURL, setPhotosURL] = useState([]); // 업로드 완료된 사진 링크들
    const [progress, setProgress] = useState(0); // 업로드 진행상태
        



    const onChangeImage = (e) => {
        const reader = new FileReader();
    
        const file = selectFile.current.files[0];
        console.log(file)
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImgUrl(reader.result);
          console.log(reader.result)
        //   setImgFile(file)
          
        };
      }
    

    const handleUpload = () => {
 
        const storageRef = ref(storage, `/files/${file.name}`);
 
        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                setPercent(percent)
                // update progress
            },
            (err) => console.log(err),
            async () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url)
                });
            }

            );
            
    };

    const handleImageUpload = async (fileList) => {
        try {
          // 업로드의 순서는 상관없으니 Promise.all로 이미지 업로드후 저장된 url 받아오기
          const urls = await Promise.all(
            fileList?.map((file) => {
             // 스토리지 어디에 저장되게 할껀지 참조 위치를 지정. 아래와 같이 지정해줄시 images 폴더에 파일이름으로 저장
              const storageRef = ref(storage, `images/${file.name}`);
              
              // File 또는 Blob 타입일 경우 uploadBytes 또는 uploadBytesResumable 메소드를 사용
              // 만약 base64 또는 data_url 문자열로 업로드를 진행할 경우는 uploadString 사용
              // 자세한 내용은 https://firebase.google.com/docs/storage/web/upload-files 공식문서 참고
              const task = uploadBytesResumable(storageRef, file);
              
              // 업로드 진행률을 모니터링, 업로드 진행률 퍼센트로 상태 지정
              task.on("state_changed", (snapshot) => {
                setProgress(
                  Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                  )
                );
              });
              return getDownloadURL(storageRef);
            })
          );
          // 업로드된 이미지 링크 상태로 지정 (보통은 해당 링크를 데이터베이스(파이어스토어)에 저장)
          setPhotosURL(urls);
          alert("성공적으로 업로드 되었습니다");
          console.log(photoURL)
        } catch (err) {
            console.error(err);
        }
        // 초기화
    };
    
    console.log(photoURL)

    if (loading) return <Loader type="spin" color="RGB 값" message={'로딩중입니다!'} />;
    
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
                <StImageBox ref={selectFile} onChange={onChangeImage} type="file" accept="/image/*"/>
                {percent ? <StLabel2>{file.name}</StLabel2> : <StLabel2>사진을 선택하세요!</StLabel2> }
                <STImageButton onClick={() => selectFile.current.click()}>컴퓨터에서 선택</STImageButton>
            </StpostBox_1>
            <StpostBox_2>
                <StUpload>
                    <UploadButton>공유하기</UploadButton>

                </StUpload>
                <StInput placeholder='문구 입력 ...'>
                </StInput>

            </StpostBox_2>
            </StpostBox>
        </StWrapper>
    </>
    
  )
}


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
    width:90%;
    border:none;
    height:300px;
    margin-top:10px;
    font-size:15px;
    padding:10px;
    &:focus {
        outline: none;
    }
    resize:none;
`
const UploadButton = styled.button`
    background-color: #ffffff;
    border:none;
    color:blue;
    font-weight:600;
    cursor:pointer;

`
