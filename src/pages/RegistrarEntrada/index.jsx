import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { registrarEntrada } from "../../services/entradaService";
import { Container, TitleTab, FormBox } from "./styles";

export default function RegistrarEntrada() {
  const navigate = useNavigate();

  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [dataHora, setDataHora] = useState(
    new Date().toISOString().slice(0, 16)
  );

  async function handleSubmit() {
    try {
      await registrarEntrada(placa, modelo, dataHora);
      alert("Entrada registrada!");
      navigate("/menu");
    } catch {
      alert("Erro ao registrar entrada!");
    }
  }

  return (
    <Container>
      <Header backTo="/menu" />

      <TitleTab>Registrar Entrada</TitleTab>

      <FormBox>
        <Input label="Placa" value={placa} onChange={e => setPlaca(e.target.value)} />
        <Input label="Modelo" value={modelo} onChange={e => setModelo(e.target.value)} />
        <Input label="Data e Hora" type="datetime-local" value={dataHora} onChange={e => setDataHora(e.target.value)} />

        <Button onClick={handleSubmit}>Registrar entrada</Button>
      </FormBox>
    </Container>
  );
}
