import React from 'react';
import './App.css';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import CVPage from './pages/CVPage/CVPage';
import ProcessPage from './pages/ProcessPage/ProcessPage';
import MyPage from './pages/MyPage/MyPage';
import JDPage from './pages/JDPage/JDPage';

// version 0.1

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<MyPage/>} />
        <Route path='/editcv/:id' element={<CVPage/>} />
        <Route path='/progress' element={<ProcessPage/>} />
        <Route path='/jd/:id' element={<JDPage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
