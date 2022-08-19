import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'

function App() {

  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
