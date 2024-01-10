
import './App.css'
import About from './Components/About'

import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Visson from './Components/Visson'
import Services from './Components/Services'
import Project from './Components/Projects'
import MyFooter from "./Components/MyFooter"
import AboutUs from './Components/AboutUs'
function App() {


  return (
    <>
    <Navbar/>
    <Home/>
    
    <Services/>
    <Project/>
    <About/>
    <Visson/>
    <AboutUs/>
    <MyFooter/>
    </>
  )
}

export default App
