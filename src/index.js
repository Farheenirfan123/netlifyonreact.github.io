import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import "./App.css"
import Hersection from './Hersection';
import Video from './Video';
import Cardsection from './Cardsection';
import Footer from './Footer';
import Lastfooter from './Lastfooter';
import Accodian from './Accodian';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {Navbar()}
    <Hersection/>
    <Video/>
    <Cardsection/>
    <Footer/>
    <Lastfooter/>
    
    
    
  </React.StrictMode>
)
