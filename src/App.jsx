import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import { ClientHistorial} from "./pages/client/ClienHistorial";
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
import { BookProvider } from "./contexts/BookProvider";
import { useAuth } from "./contexts/AuthProvider";
import { UpdateBookSecondView } from "./pages/admin/UpdateBookSecondView";
import { RecordsList } from "./pages/admin/RecordsList";

function App() {
  const { isAuthenticated, roles } = useAuth();

  return (
    <BookProvider>
      <BrowserRouter>
        <Header />

        {isAuthenticated && roles.includes("ROLE_ADMIN") && <AdminSidebar />}
        {isAuthenticated && roles.includes("ROLE_USER") && <ClientSidebar />}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/recoverpassword" element={<RecoverPassword />} />

          {isAuthenticated && roles.includes("ROLE_USER") ? (
            <>
              <Route path="/clienthome" element={<ClientHome />} />
              <Route path="/clientdata" element={<ClientData />} />
              <Route
                path="/recoverpasswordauth"
                element={<RecoverPasswordAuth />}
              />
              <Route path="/myloans" element={<ClientHistorial type={"prestamo"} />} />
              <Route path="/myreservations" element={<ClientHistorial type={"reserva"} />} />
              <Route path="/deletemyaccount" element={<DeleteAccount />} />
              <Route
                path="/clientnotifications"
                element={<ClientNotification />}
              />
              <Route path="/clientbookdetails" element={<BookDetails />} />
            </>
          ) : (
            <Route path="/clienthome" element={<Navigate to="/login" />} />
          )}

          {isAuthenticated && roles.includes("ROLE_ADMIN") ? (
            <>
              <Route path="/booklist" element={<BookList />} />
              <Route path="/addbook" element={<AddBook />} />
              <Route path="/deletebook" element={<DeleteBook />} />
              <Route path="/updatebook" element={<UpdateBook />} />
              <Route path="/adminbookdetails" element={<BookDetailsAdmin />} />
              <Route path="/updatebooksecondview" element={<UpdateBookSecondView/>}></Route>
              <Route path="/loans" element={<RecordsList type={"prestamo"}></RecordsList>}></Route>
              <Route path="/reservationS" element={<RecordsList type={"reserva"}></RecordsList>}></Route>
            </>
          ) : (
            <Route path="/booklist" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </BrowserRouter>
    </BookProvider>
  );
}

export default App;
