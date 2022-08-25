import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Redirect, useLocation, useNavigate, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import Signup from './pages/Signup';
import Newpost from './pages/Newpost';
import Header from './components/Header'
import Practice from './pages/Practice';
import Mypage from './pages/Mypage';
import react, {useEffect} from 'react'
import UseGetUser from './hooks/UseGetUser';
import { getCookieToken } from './Cookie';

function App() {

  const {pathname} = useLocation();
  const navigate = useNavigate();

  const user = UseGetUser()
  const usertoken = getCookieToken()


  return (
    <>
    { pathname !== '/' && pathname !== '/signup' ? <Header user={user}/> : null}
        <Routes>

        <Route patg="/" element={usertoken ? <Main/> : <Navigate to="/login" replace/>}/>
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
