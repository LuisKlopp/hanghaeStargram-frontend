import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Redirect, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import Signup from './pages/Signup';
import { Newpost } from './components/Newpost';
import Header from './components/Header'
import Detail from './components/Detail';
import Mypage from './pages/Mypage';


function App() {

  const {pathname} = useLocation();

  return (
    <>
    { pathname !== '/login' && pathname !== '/signup' ? <Header/> : null}
        <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main/>}/>
        <Route path="signup" element={<Signup />} />
        <Route path="newpost" element={<Newpost />} />
        <Route path="/mypage" element={<Mypage/>}/>

        </Routes>
    </> 
  );
}

export default App;
