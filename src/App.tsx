import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import HotTokens from './components/HotTokens'
import Exchanges from './components/Exchanges'
import Global from './components/GobalCrypto'
import Blockchains from './components/Blockchains'

function App() {

  return (
   
    <div className='flex flex-col'>
    
    <Navbar/>
    <div className='flex'>
      <Sidebar/>
      <div className=' md:absolute md:top-25 md:left-120  border-t text-[#ffafe2]'
      >
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/trend' element={<HotTokens/>}></Route>
          <Route path='/ex' element={<Exchanges/>}></Route>
          <Route path='/global' element={<Global/>}></Route>
           <Route path='/chains' element={<Blockchains/>}></Route>
        </Routes>
      </div>
    </div>
   </div>
 
  )
}

export default App
