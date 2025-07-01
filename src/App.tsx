import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Tokens from './components/Tokens'
import HotTokens from './components/HotTokens'
import Prices from './components/Prices'
import Sidebar from './components/Sidebar'

function App() {

  return (
   <div className='flex flex-col'>
    <Navbar/>
    <div className='flex'>
      <Sidebar></Sidebar>
      <div className='w-full min-h-screen bg-[#dcd4ff]'>
        <Routes>
          <Route path='/' element={<Tokens/>}></Route>
          <Route path ='/price' element={<Prices/>}></Route>
          <Route path='/trend' element={<HotTokens/>}> </Route>
        </Routes>
      </div>
    </div>
   </div>
  )
}

export default App
