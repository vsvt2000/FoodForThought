//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          
        </Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
