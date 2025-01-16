import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import { Header } from './components/Header'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { ClientHome } from './pages/ClientHome'
import { RecoverPassword } from './pages/RecoverPassword'
import { ClientData } from './pages/client/ClientData'
import { RecoverPasswordAuth } from './pages/RecoverPasswordAuth'
import { ClientLoans } from './pages/client/ClientLoans'
import { ClientReservations } from './pages/client/ClientReservations'
import { DeleteAccount } from './pages/client/DeleteAccount'

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
            <Route path='/myloans' element={<ClientLoans></ClientLoans>}></Route>
            <Route path='/myreservations' element={<ClientReservations></ClientReservations>}></Route>
            <Route path='/deletemyaccount' element={<DeleteAccount></DeleteAccount>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
