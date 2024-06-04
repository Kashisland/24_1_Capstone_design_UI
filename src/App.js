import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Chatbot from "./pages/Chatbot";
import SignUp from "./pages/SignUp";
import BoardWrite from "./pages/BoardWrite"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/community" exact element={<Community />} />
          <Route path="/boardwrite" exact element={<BoardWrite />} />
          <Route path="/chatbot" exact element={<Chatbot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};


export default App;
