import axios from "axios";

export const api = axios.create({
  baseURL: "https://parkingapisenai.azurewebsites.net/api", // coloque o IP/porta da sua API aqui
  timeout: 5000,
});

// Interceptor de erros
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response) {
      console.error("Erro da API:", err.response.data);
    } else {
      console.error("Erro de conexão:", err);
    }
    return Promise.reject(err);
  }
);
