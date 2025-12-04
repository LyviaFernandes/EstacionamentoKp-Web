import { api } from "./api";

export async function listarHistorico() {
  const res = await api.get("/veiculos/placa");
  return res.data;
}
