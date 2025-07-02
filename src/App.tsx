import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Sidebar from './components/Sidebar'

function App() {

  return (
   
    <div className='flex flex-col'>
    
    <Navbar/>
    <div className='flex'>
      <Sidebar/>
      <div className='w-full min-h-screen bg-white border-t text-[#ffafe2]'
      >
        <Routes>
          <Route path='/' element={<Home/>}></Route>
         
        </Routes>
      </div>
    </div>
   </div>
 
  )
}

export default App
