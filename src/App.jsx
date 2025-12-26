import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./Pages/Home";
import SinglePost from "./Pages/SinglePost";
import Admin from "./Pages/Admin";
import EditPost from "./Pages/EditPost";
import { PostsProvider } from "./Context/PostsContext";
import { ThemeProvider } from "./Context/ThemeContext";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <PostsProvider>
          <Navbar />
          <AnimatePresence mode="wait">

          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<SinglePost />} />

            {/* admin */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Routes>
          </AnimatePresence>
        </PostsProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
