import { Container, LogoImg, BackBtn } from "./styles";
import logo from "../../assets/images/kpLogo.svg";
import { useNavigate } from "react-router-dom";

export default function HeaderLogin({ backTo = "/menu" }) {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoImg src={logo} alt="Logo KP" />
      <BackBtn onClick={() => navigate(backTo)}>
        
      </BackBtn>
    </Container>
  );
}
