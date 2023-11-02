import React, { useState } from "react";
import { Route, Switch, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";
import Home from "./Home";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "A River Runs Through It" },
    { id: 2, title: "Se7en" },
    { id: 3, title: "Inception" }
  ]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/movies/*" element={<MoviesPage movies={movies}></MoviesPage>}></Route>
        <Route exact path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
