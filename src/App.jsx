import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Home } from './pages/Home'
import { RecoverPassword } from './pages/RecoverPassword'

function App() {
  return (
    <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path='/' element = {<Login></Login>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/recoverpassword' element={<RecoverPassword></RecoverPassword>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
