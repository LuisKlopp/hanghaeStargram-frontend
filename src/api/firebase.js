//firebase.js
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";
import "firebase/compat/storage"



const firebaseConfig = {
  apiKey: "AIzaSyCadFnkFkxx9JlHFEbB-Q3pseFkorlv-7c",
  authDomain: "hanghae-a0e89.firebaseapp.com",
  projectId: "hanghae-a0e89",
  storageBucket: "hanghae-a0e89.appspot.com",
  messagingSenderId: "685896833519",
  appId: "1:685896833519:web:db1046d94055b9e425fe1a"
};


// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
export const db = getFirestore()
export const storage = firebase.storage();