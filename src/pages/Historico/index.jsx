import { useEffect, useState } from "react";
import Header from "../../components/Header";
import CardHistorico from "../../components/CardHistorico";
import { listarHistorico } from "../../services/historicoService";

import { Container, PageHeader, Title, SearchBar, CardsGrid } from "./styles";

export default function Historico() {
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true; // flag para evitar setState após desmontagem

    async function load() {
      try {
        const data = await listarHistorico();
        if (mounted) {
          setHistory(data || []); // só atualiza se ainda montado
        }
      } catch (err) {
        console.error("Erro ao carregar histórico:", err);
        if (mounted) setError("Erro ao carregar histórico");
      }
    }

    load();

    return () => {
      mounted = false; // cleanup
    };
  }, []); // rodar apenas uma vez na montagem

  const filtrados = history.filter((h) =>
    (h.placa || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Header backTo="/menu" />

      <PageHeader>
        <Title>Histórico</Title>
        <SearchBar
          value={search}
          placeholder="Buscar"
          onChange={(e) => setSearch(e.target.value)}
        />
      </PageHeader>

      {error && <p style={{ color: "red", marginTop: 12 }}>{error}</p>}

      <CardsGrid>
        {filtrados.map((h, i) => (
          <CardHistorico
            key={i}
            placa={h.placa}
            entradaData={h.dataEntrada}
            entradaHora={h.horarioEntrada}
            saidaData={h.dataSaida}
            saidaHora={h.horarioSaida}
            valor={h.valorPago}
          />
        ))}
      </CardsGrid>
    </Container>
  );
}
