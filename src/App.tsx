import './App.css';
import React from 'react';
import Header from './app/components/header/header';
import Main from './app/components/main/main';
import Footer from './app/components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
