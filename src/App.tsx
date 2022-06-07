import React from 'react';
import './App.css';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import CVPage from './pages/CVPage/CVPage';
import ProcessPage from './pages/ProcessPage/ProcessPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* <Route path='/mycv' element={<MainPage/>} /> */}
        <Route path='/editcv/:id' element={<CVPage/>} />
        <Route path='/progress' element={<ProcessPage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
