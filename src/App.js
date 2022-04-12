import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./Components/OnBoard/Home";
import LoginPage from "./Components/Auth/LoginPage";
import SignUpPage from "./Components/Auth/SignUpPage";
import HomePage from "./Components/Home/HomePage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Components/Firebase/firebase";
import { getUser } from "./Components/Firebase/firebaseMethods";
import SignOutIndicator from "./Components/utils/SignOutIndicator";

export const userContext = createContext();
const App = () => {
  const [user, setUser] = useState({ logedIn: false });
  const [loading, setLoading] = useState(true);

  return (
    <userContext.Provider value={{ user, setUser, loading, setLoading }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/error" element={<SignOutIndicator />}></Route>
        </Routes>
      </Router>
    </userContext.Provider>
  );
};

export default App;
