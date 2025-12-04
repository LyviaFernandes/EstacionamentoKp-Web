import { useEffect, useState } from "react";
import Header from "../../components/Header";
import CardAtivo from "../../components/CardAtivo";
import { listarAtivos } from "../../services/ativosService";

import { Container, PageHeader, Title, SearchBar, CardsGrid } from "./styles";

export default function VeiculosAtivos() {
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await listarAtivos();
        setVehicles(data);
      } catch (error) {
        console.error(error);
      }
    }
    load();
  }, []);

  const filtrados = vehicles.filter((v) =>
    v.placa.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Header backTo="/menu" />

      <PageHeader>
        <Title>Veículos Ativos</Title>
        <SearchBar
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </PageHeader>

      <CardsGrid>
        {filtrados.map((v, i) => (
          <CardAtivo
            key={i}
            placa={v.placa}
            data={v.dataEntrada}
            hora={v.horarioEntrada}
          />
        ))}
      </CardsGrid>
    </Container>
  );
}
