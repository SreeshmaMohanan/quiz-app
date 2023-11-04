import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Settings } from './pages/Settings';
import Result from './pages/Result';
import Quiz from './pages/Quiz';
import { useState } from 'react';
function App() {
  const [name,setName]=useState("")
  const qeastionFetch=()=>{

  }
  return (
    <div className='w-100 align-items-center mt-5 d-flex flex-wrap flex-column flex wrap justify-content-center ' style={{height:'100vh'}}>
      <h1 className='  fw-bolder' style={{fontSize:'30px'}}>Quiz App</h1>
      <Routes>
        
        <Route path='/' element={<Settings name={name} setName={setName} qeastionFetch={qeastionFetch}/>}  />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/result' element={<Result/>} />
      </Routes>
    
    </div>
  );
}

export default App;
