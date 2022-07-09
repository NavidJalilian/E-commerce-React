import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Shop from "./pages/Shop";

import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import SignUpForm from "./components/SignUpForm";
import CheckOut from "./pages/CheckOut";

export default function App() {
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
