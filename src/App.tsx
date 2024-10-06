import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cursor from './utils/Cursor';

function App() {
  return (
    <div className='w-screen h-screen overflow-hidden'>
      <Navbar/>  
      <Home/>
      <Cursor/>
    </div>
  )
}

export default App;