import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Menu from "../pages/Menu";
import RegistrarEntrada from "../pages/RegistrarEntrada";
import RegistrarSaida from "../pages/RegistrarSaida";
import VeiculosAtivos from "../pages/VeiculosAtivos";
import Historico from "../pages/Historico";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/entrada" element={<RegistrarEntrada />} />
        <Route path="/saida" element={<RegistrarSaida />} />
        <Route path="/ativos" element={<VeiculosAtivos />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </BrowserRouter>
  );
}
