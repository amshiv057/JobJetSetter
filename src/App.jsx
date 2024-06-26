
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Register from './components/Companies/Register/Register'
import CompLogin from './components/Companies/login/CompLogin'
import PostJob from './components/Companies/Opening/postJob'
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/compRegister' element={<Register />} />
        <Route path='/compLogin' element={<CompLogin />} />
        <Route path='/compJobpost' element={<PostJob />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
