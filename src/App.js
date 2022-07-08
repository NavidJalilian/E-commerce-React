import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Shop from "./pages/Shop";
import { useDispatch } from "react-redux/es/exports";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import SignUpForm from "./components/SignUpForm";
import CheckOut from "./pages/CheckOut";
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase";
import { setCurrentUser } from "./store/user/action";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocFromAuth(user);
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Shop/*" element={<Shop />} />
          <Route path="Check-Out" element={<CheckOut />} />
          <Route path="Auth" element={<Authentication />} />
          <Route path="Sing-Up" element={<SignUpForm />} />
        </Route>
      </Routes>
    </>
  );
}
