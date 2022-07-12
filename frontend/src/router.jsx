import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddSala from "./AddSala";
import NavBar from "./components/NavBar";
import Pessoas from "./pages/Pessoas";
import Vincular from "./pages/Vincular";
import Buscar from "./pages/Buscar";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AddSala />} />
          <Route path="/cadastrar-pessoas" element={<Pessoas />} />
          <Route path="/vincular" element={<Vincular />} />
          <Route path="/buscar" element={<Buscar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
