import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { ClientHome } from './pages/ClientHome'
import { RecoverPassword } from './pages/RecoverPassword'
import { ClientData } from './pages/client/ClientData'
import { RecoverPasswordAuth } from './pages/RecoverPasswordAuth'

function App() {
  return (
    <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path='/' element = {<Login></Login>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
            <Route path='/clienthome' element={<ClientHome></ClientHome>}></Route>
            <Route path='/recoverpassword' element={<RecoverPassword></RecoverPassword>}></Route>
            <Route path='/clientdata' element={<ClientData></ClientData>}></Route>
            <Route path='/recoverpasswordauth' element={<RecoverPasswordAuth></RecoverPasswordAuth>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
