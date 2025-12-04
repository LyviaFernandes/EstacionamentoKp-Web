import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { cadastro } from "../../services/authServices";
import { Container, TitleTab, FormBox } from "./styles";
import HeaderLogin from "../../components/HeaderLogin";

export default function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleCadastro() {
    try {
      await cadastro(nome, email, senha);
      alert("Cadastro realizado!");
      navigate("/");
    } catch {
      alert("Erro ao cadastrar!");
    }
  }

  return (
    <Container>
      <HeaderLogin />

      <TitleTab>Cadastro</TitleTab>

      <FormBox>
        <Input label="Nome" value={nome} onChange={e => setNome(e.target.value)} />
        <Input label="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input label="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} />

        <Button onClick={handleCadastro}>Registrar</Button>
      </FormBox>
    </Container>
  );
}
