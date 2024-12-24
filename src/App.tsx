import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Cursor from './utils/Cursor';

import './App.css'

function App() {
  return (
  <>
    <Cursor/>
    <div className='w-screen h-screen overflow-hidden'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
    
    </div>
  </>
  )
}

export default App;