import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { registrarSaida } from "../../services/saidaService";
import { Container, TitleTab, FormBox } from "./styles";

export default function RegistrarSaida() {
  const navigate = useNavigate();

  const [placa, setPlaca] = useState("");
  const [dataHora, setDataHora] = useState(new Date().toISOString().slice(0, 16));
  const [valor, setValor] = useState("");

  async function handleSubmit() {
    try {
      await registrarSaida(placa, dataHora, valor);
      alert("Saída registrada!");
      navigate("/menu");
    } catch {
      alert("Erro ao registrar saída!");
    }
  }

  return (
    <Container>
      <Header backTo="/menu" />

      <TitleTab>Registrar Saída</TitleTab>

      <FormBox>
        <Input label="Placa" value={placa} onChange={e => setPlaca(e.target.value)} />
        <Input label="Data e Hora" type="datetime-local" value={dataHora} onChange={e => setDataHora(e.target.value)} />
        <Input label="Valor Pago" value={valor} onChange={e => setValor(e.target.value)} />

        <Button onClick={handleSubmit}>Registrar saída</Button>
      </FormBox>
    </Container>
  );
}
