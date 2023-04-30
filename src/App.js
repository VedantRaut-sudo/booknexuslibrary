import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AdminLogin from "./Pages/AdminLogin";
import SignUpAdmin from "./Pages/SignUpAdmin";
import DashBoard from "./Pages/DashBoard";
import SingleBookDetailPage from "./Pages/SingleBookDetailPage";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [adminAuth, setAdminAuth] = useState(false);
  return (
    <div className="App">
      <Router>
        <NavBar isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/login"
            element={<Login setIsAuth={setIsAuth} adminAuth={adminAuth} />}
          />
          <Route exact path="/loginforadmin" element={<AdminLogin setAdminAuth={setAdminAuth}/>} />
          <Route exact path="/signupforadmin" element={<SignUpAdmin />} />
          <Route exact path="/dashboard" element={<DashBoard adminAuth={adminAuth}/>} />
          <Route exact path="/books/:id" element={<SingleBookDetailPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
