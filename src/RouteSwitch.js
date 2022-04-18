import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import AllPosts from "./components/AllPosts";
import Footer from "./components/Footer";

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/allposts" element={<AllPosts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouteSwitch;
