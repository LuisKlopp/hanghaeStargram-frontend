import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Redirect, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import Signup from './pages/Signup';
import Newpost from './pages/Newpost';
import Header from './components/Header'
import Practice from './pages/Practice';
import Mypage from './pages/Mypage';
import react, {useEffect} from 'react'
import UseGetUser from './hooks/UseGetUser';

function App() {

  const {pathname} = useLocation();

  const user = UseGetUser()

  if (user === null) {
    return (
    <div>
      로딩중1
    </div>
    )
  } 


  return (
    <>
    { pathname !== '/' && pathname !== '/signup' ? <Header user={user}/> : null}
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
