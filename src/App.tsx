import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import HotTokens from './components/HotTokens'
import Exchanges from './components/Exchanges'
import Global from './components/GobalCrypto'

function App() {

  return (
   
    <div className='flex flex-col'>
    
    <Navbar/>
    <div className='flex'>
      <Sidebar/>
      <div className='md:w-full md:min-h-screen  bg-white border-t text-[#ffafe2]'
      >
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/trend' element={<HotTokens/>}></Route>
          <Route path='/ex' element={<Exchanges/>}></Route>
          <Route path='/global' element={<Global/>}></Route>
          
        </Routes>
      </div>
    </div>
   </div>
 
  )
}

export default App
