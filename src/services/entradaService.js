import { api } from "./api";

export async function registrarEntrada(placa, modelo, dataHora) {
  const res = await api.post("/veiculos/entrada", {
    placa,
    modelo,
    dataHora,
  });
  return res.data;
}
