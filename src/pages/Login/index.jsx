import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { login } from "../../services/authServices";
import { Container, TitleTab, FormBox, ButtonForgot, ButtonNoAccount } from "./styles";
import HeaderLogin from "../../components/HeaderLogin";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    try {
      await login(email, senha);
      alert("Login realizado com sucesso!");
      navigate("/menu");
    } catch {
      alert("Email ou senha inválidos!");
    }
  }

  return (
    <Container>
      <HeaderLogin />

      <TitleTab>Login</TitleTab>

      <FormBox>
        <Input label="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input label="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} />

        <ButtonForgot>Esqueci a senha</ButtonForgot>

        <Button onClick={handleLogin}>Entrar</Button>

        <ButtonNoAccount onClick={() => navigate("/cadastro")}>
          Não tenho cadastro
        </ButtonNoAccount>
      </FormBox>
    </Container>
  );
}
