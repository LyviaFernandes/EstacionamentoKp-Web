import { api } from "./api";

export async function listarAtivos() {
  const res = await api.get("/veiculos");
  return res.data;
}
