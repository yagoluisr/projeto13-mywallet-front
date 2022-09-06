import './Css/reset.css';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./GlobalStyle.js";
import Home from './Home';
import InsertEntry from './InsertEntry';
import InsertOutput from './InsertOutput';
import Login from './Login';
import Register from './Register';





export default function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Home /> */}
      <InsertEntry />
      <InsertOutput />
      
    </>
  );
}
