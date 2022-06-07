import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideMenu from './components/CVPageRelated/SideMenu/SideMenu';
import CVPage from './pages/CVPage/CVPage';
import ProcessPage from './pages/ProcessPage/ProcessPage';

function App() {
  return (
    <>
      {/* <CVPage/> */}
      <ProcessPage/>
    </>
  );
}

export default App;
