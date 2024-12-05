import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Layout from './Layout'

function App() {
    


  return (
    <>
       <Routes>
       
        <Route path='/' element={<Layout></Layout>}></Route>
       </Routes> 
          
       
    </>
  )
}

export default App