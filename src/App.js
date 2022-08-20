import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import Signup from './pages/Signup';
import { Newpost } from './components/Newpost';

function App() {

  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="newpost" element={<Newpost />} />
        </Routes>
    </div>
  );
}

export default App;
