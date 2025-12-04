import { api } from "./api";

export async function registrarSaida(placa, dataHora, valorPago) {
  const res = await api.post("/veiculos/saida", {
    placa,
    dataHora,
    valorPago,
  });
  return res.data;
}
