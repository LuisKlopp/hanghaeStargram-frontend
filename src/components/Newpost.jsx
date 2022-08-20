import React from 'react'
import styled from "styled-components";
import insta_file from '../images/insta_file.PNG'
import { useRef } from 'react';

export const Newpost = () => {

    const selectFile = useRef("");
    
  return (
    <>
        <StWrapper>
            <StpostBox>
                <StLabel>
                    새 게시물 만들기
                </StLabel>
                <StImageBox ref={selectFile} type="file"/>
                <StLabel2>사진과 동영상을 여기에 끌어다 놓으세요</StLabel2>
                <STImageButton onClick={() => selectFile.current.click()}>컴퓨터에서 선택</STImageButton>
            </StpostBox>
        </StWrapper>
    </>
    
  )
}

const StWrapper = styled.div`
    width: 100%;
    height: 100vh;
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
    width: 550px;
    height: 58vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: url(${insta_file});
    background-repeat: no-repeat;
    background-position: center
    // background-size: 10% 10%;
    // background-size : cover;
    // background: no-repeat;
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
`;