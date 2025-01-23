import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Cursor from './utils/Cursor';

import './App.css'
import Resume from "./components/Resume.tsx";

function App() {
  return (
  <>
    <Cursor/>
    <div className='w-screen min-h-screen overflow-hidden'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
    
    </div>
  </>
  )
}

export default App;