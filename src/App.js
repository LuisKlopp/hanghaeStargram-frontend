import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Redirect, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import Signup from './pages/Signup';
import Newpost from './pages/Newpost';
import Header from './components/Header'
import Detail from './components/Detail';
import Practice from './pages/Practice';
import Mypage from './pages/Mypage';
import react, {useEffect} from 'react'

function App() {

  const {pathname} = useLocation();


  return (
    <>
    { pathname !== '/' && pathname !== '/signup' ? <Header/> : null}
        <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/newpost" element={<Newpost/>} />
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path="/practice" element={<Practice/>}/>

        </Routes>
    </> 
  );
}

export default App;
