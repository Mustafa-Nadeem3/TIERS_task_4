import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateBlog from "./components/CreateBlog";
import ViewBlog from "./components/ViewBlog";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateBlog />} />
          <Route path="/view" element={<ViewBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;