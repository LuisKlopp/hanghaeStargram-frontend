import React, {useState} from 'react'
import styled from "styled-components";
import insta_file from '../images/insta_file.PNG'
import { useRef } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../api/firebase";
import { Line } from "rc-progress";


export const Newpost = () => {

    const selectFile = useRef("");

    const [file, setFile] = useState('');
    const [percent, setPercent] = useState(false);
    const [ imgurl, setImgUrl ] = useState('')
    const [preview, setPreview] = useState('')


    function handleChange(event) {
        setFile(event.target.files[0]);
        setPreview(URL.createObjectURL(event.target.files[0]));
        console.log(preview)
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
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url)
                    setImgUrl(url)
                });
            }
            );
    };

    console.log(imgurl)
    
  return (
    <>
        <StWrapper>
            <StpostBox>
                <StLabel>
                    {percent ? <StFilename> <span>새 게시물 만들기</span>  <span style={{fontWeight:'600', color:'blue'}}>다음!</span> </StFilename>  : '새 게시물 만들기' }
                </StLabel>
                { percent ? <StImgPreview src={imgurl}></StImgPreview> : null }
                <StImageBox ref={selectFile} onChange={handleChange} type="file" accept="/image/*"/>
                {percent ? <StLabel2>{file.name}</StLabel2> : <StLabel2>사진을 선택하세요!</StLabel2> }
                {percent? <StButton onClick={handleUpload}>클릭하면 미리보기</StButton> : <STImageButton onClick={() => selectFile.current.click()}>컴퓨터에서 선택</STImageButton> }
            </StpostBox>
        </StWrapper>
    </>
    
  )
}

const StWrapper = styled.div`
    width: 100%;
    height: 80vh;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StpostBox = styled.div`
    background-color: white;
    border: 1px solid #bababa;
    border-radius : 15px;
    width: 600px;
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
  height:92%;
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