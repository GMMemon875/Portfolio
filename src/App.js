 import React from 'react'
 import { BrowserRouter,Routes,Route,} from 'react-router-dom'
import Header from './Componanat/Header'
import Banner from './Componanat/Banner'
import About from './Componanat/About'
import Services from './Componanat/Services'
import Experties from './Componanat/Experties'
import Footar from './Componanat/Footar'
import Project from './Componanat/Project'
 
 const App = () => {
   return (
      <>
  

 
  
   
  
       <Header />
      <Banner />
      <About />
      <Services />
      <Experties />
      <Project />
       <Footar />  
{/*        
  <Routes>


    <Route path='/Banner' element={<Banner/>}></Route>
    <Route path='/About' element={ <About /> }></Route>
    <Route path='/Services' element={ <Services />}></Route>
    <Route path='/Experties' element={ <Experties />}></Route>
    <Route path='/Project' element={ <Project />}></Route>
    <Route path='/Footar' element={ <Footar /> }></Route>
  
  </Routes> */} 
  
  
  
  




 
      </>
   )
 }
 
 export default App





 