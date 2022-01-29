import React from 'react';
import {Header} from './components/Header'
import Main from './pages/Main'
import './build.css'


export default function App() {
  return (
      <div className="bg-black/5 h-screen w-screen">
               <Header />

         <Main className="bg-black/5 h-max-screen w-screen"></Main>
      </div>
  );
}

