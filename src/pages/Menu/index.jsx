import Header from "../../components/Header";
import { Container, ButtonsContainer, MenuButton } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header backTo="/" />

      <ButtonsContainer>
        <MenuButton onClick={() => navigate("/entrada")}>
          Registrar Entrada
        </MenuButton>

        <MenuButton onClick={() => navigate("/saida")}>
          Registrar Saída
        </MenuButton>

        <MenuButton onClick={() => navigate("/ativos")}>
          Veículos Ativos
        </MenuButton>
      </ButtonsContainer>
    </Container>
  );
}
