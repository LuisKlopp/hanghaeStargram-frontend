import { useState } from "react";
import { storage } from "../api/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Line } from "rc-progress";

function Practice () {

    const [files, setFileList] = useState([]); // 파일 리스트
    const [isUploading, setUploading] = useState(false); // 업로드 상태
    const [photoURL, setPhotosURL] = useState([]); // 업로드 완료된 사진 링크들
    const [progress, setProgress] = useState(0); // 업로드 진행상태
  
    // 파일 선택시 파일리스트 상태 변경해주는 함수
    const handleImageChange = (e) => {
      for (const image of e.target.files) {
        setFileList((prevState) => [...prevState, image]);
      }

      console.log(files)
    };
  
    // 업로드시 호출될 함수
    const handleImageUpload = async (e, fileList) => {
      e.preventDefault();
      try {
        setUploading(true);
        const urls = await Promise.all(
          fileList?.map(async (file) => {
            const storageRef = ref(storage, `images/${file.name}`);
            

             await uploadBytesResumable(storageRef, file);
            
 
            return getDownloadURL(storageRef);
          })
        );
        setPhotosURL(urls);
        alert("성공적으로 업로드 되었습니다");
      } catch (err) {
        console.error(err);
      }
      // 초기화
      setUploading(false);
    };

    console.log(photoURL)
 
    return (
        <div>
        <form onSubmit={(e) => handleImageUpload(e, files)}>
          {/* rc-progress의 Line 컴포넌트로 파일 업로드 상태 표시 */}
          <Line percent={progress} strokeWidth={4} strokeColor="#ff567a" />
          <label>
            파일:
            <input
              multiple
              accept="image/*"
              type="file"
              onChange={handleImageChange}
            />
          </label>
          <button type="submit">{isUploading ? "업로드중..." : "업로드"}</button>
        </form>
        {photoURL?.length > 0 && (
          <ul>
            {photoURL.map((url, index) => (
              <li key={index}>
                <img
                  src={url}
                  alt="사용자 첨부 이미지"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
  
    );
}
 
export default Practice;