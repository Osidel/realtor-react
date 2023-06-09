import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Offers from "./pages/Offers"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import ForgotPassword from "./pages/ForgotPassword"
import Header from "./components/Header"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute"
import CreateListing from "./pages/CreateListing"
import EditListing from "./pages/EditListing"

function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile/>}></Route>
        </Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/offers" element={<Offers/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
        <Route path="/create-listing" element={<PrivateRoute />}>
          <Route path="/create-listing" element={<CreateListing/>}></Route>
        </Route>
        <Route path="/edit-listing" element={<PrivateRoute />}>
          <Route path="/edit-listing/:listingId" element={<EditListing/>}></Route>
        </Route>
      </Routes>
      <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
    <ToastContainer />
    </Router>
    
  );
}

export default App;
