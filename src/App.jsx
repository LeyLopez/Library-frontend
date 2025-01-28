import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { ClientHome } from "./pages/client/ClientHome";
import { RecoverPassword } from "./pages/RecoverPassword";
import { ClientData } from "./pages/client/ClientData";
import { RecoverPasswordAuth } from "./pages/RecoverPasswordAuth";
import { ClientLoans } from "./pages/client/ClientLoans";
import { ClientReservations } from "./pages/client/ClientReservations";
import { DeleteAccount } from "./pages/client/DeleteAccount";
import { BookList } from "./pages/admin/BookListAdminHome";
import { AddBook } from "./pages/admin/AddBook";
import { DeleteBook } from "./pages/admin/DeleteBook";
import { UpdateBook } from "./pages/admin/UpdateBook";
import { ClientNotification } from "./pages/client/ClientNotification";
import { BookDetails } from "./pages/client/BookDetailsClient";
import { ClientSidebar } from "./pages/client/ClientSidebar";
import { AdminSidebar } from "./pages/admin/AdminSidebar";
import { BookDetailsAdmin } from "./pages/admin/BookDetailsAdmin";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <AdminSidebar></AdminSidebar>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/clienthome" element={<ClientHome></ClientHome>}></Route>
        <Route
          path="/recoverpassword"
          element={<RecoverPassword></RecoverPassword>}
        ></Route>
        <Route path="/clientdata" element={<ClientData></ClientData>}></Route>
        <Route
          path="/recoverpasswordauth"
          element={<RecoverPasswordAuth></RecoverPasswordAuth>}
        ></Route>
        <Route path="/myloans" element={<ClientLoans></ClientLoans>}></Route>
        <Route
          path="/myreservations"
          element={<ClientReservations></ClientReservations>}
        ></Route>
        <Route
          path="/deletemyaccount"
          element={<DeleteAccount></DeleteAccount>}
        ></Route>
        <Route path="/booklist" element={<BookList></BookList>}></Route>
        <Route path="/addbook" element={<AddBook></AddBook>}></Route>
        <Route path="/deletebook" element={<DeleteBook></DeleteBook>}></Route>
        <Route path="/updatebook" element={<UpdateBook></UpdateBook>}></Route>
        <Route
          path="/clientnotifications"
          element={<ClientNotification></ClientNotification>}
        ></Route>
        <Route
          path="/clientbookdetails"
          element={<BookDetails></BookDetails>}
        ></Route>
        <Route path="/adminbookdetails" element={<BookDetailsAdmin></BookDetailsAdmin>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
