import './Css/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./GlobalStyle.js";
import Home from './Home';
import InsertEntry from './InsertEntry';
import InsertOutput from './InsertOutput';
import Login from './Login';
import Register from './Register';
import UserContext from '../components/Contexts/ContextAPI.js';
import { useState } from 'react';




export default function App() {
  const [token, setToken] = useState('');
  const [userId, setUsetId] = useState('');

  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContext.Provider value={{token, setToken, userId, setUsetId}}>
        <Routes>
          <Route path={'/sign-in'} element={<Login />}/>
          <Route path={'/sign-up'} element={<Register />}/>
          <Route path={'/'} element={<Home />} />
          <Route path={'/novaentrada'} element={<InsertEntry />} />
          <Route path={'/novasaida'} element={<InsertOutput />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
