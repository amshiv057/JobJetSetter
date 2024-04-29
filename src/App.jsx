
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Register from './components/Companies/Register/Register'
import {Routes ,Route} from "react-router-dom";
function App() {

  return (
    <>
      <Navbar />
      <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path= '/compRegister' element ={<Register/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
