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
import { useContext } from "react";
import { AuthContext, AuthProvider } from "./contexts/AuthProvider";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>

        {auth && auth.role === "admin" && <AdminSidebar />}
        {auth && auth.role === "cliente" && <ClientSidebar />}

        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/recoverpassword" element={<RecoverPassword />}></Route>

          <Route element={<ProtectedRoutes allowedRoles={["cliente"]} />}>
            <Route path="/clienthome" element={<ClientHome />}></Route>
            <Route path="/clientdata" element={<ClientData />}></Route>
            <Route
              path="/recoverpasswordauth"
              element={<RecoverPasswordAuth />}
            />
            <Route path="/myloans" element={<ClientLoans />}></Route>
            <Route
              path="/myreservations"
              element={<ClientReservations />}
            ></Route>
            <Route path="/deletemyaccount" element={<DeleteAccount />}></Route>
            <Route
              path="/clientnotifications"
              element={<ClientNotification />}
            ></Route>
            <Route path="/clientbookdetails" element={<BookDetails />}></Route>
          </Route>

          <Route element={<ProtectedRoutes allowedRoles={["admin"]} />}>
            <Route path="/booklist" element={<BookList />}></Route>
            <Route path="/addbook" element={<AddBook />}></Route>
            <Route path="/deletebook" element={<DeleteBook />}></Route>
            <Route path="/updatebook" element={<UpdateBook />}></Route>

            <Route
              path="/adminbookdetails"
              element={<BookDetailsAdmin />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
