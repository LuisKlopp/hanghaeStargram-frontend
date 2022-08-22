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
import Newpost1 from './pages/Newpost1'
import react, {useEffect} from 'react'

function App() {

  const {pathname} = useLocation();


  return (
    <>
    { pathname !== '/login' && pathname !== '/signup' ? <Header/> : null}
        <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/newpost" element={<Newpost/>} />
        <Route path="/newpost1" element={<Newpost1/>} />
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path="/practice" element={<Practice/>}/>

        </Routes>
    </> 
  );
}

export default App;
